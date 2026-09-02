"""Render a loopable 21:9 amber ambient video and encode with ffmpeg."""
import numpy as np
import subprocess
from pathlib import Path

W, H = 1680, 720
FPS, SECONDS = 24, 10
N = FPS * SECONDS
OUT = Path("/Users/zhangyaqian/Desktop/张世鑫个人网站/public/videos")
OUT.mkdir(parents=True, exist_ok=True)

rng = np.random.default_rng(7)
AMBER = np.array([110, 170, 255], dtype=float)

x = np.linspace(0, 1, W)[None, :]
y = np.linspace(0, 1, H)[:, None]

# particles: fixed positions, drift handled by looping phase
NP = 700
px = rng.uniform(0, 1, NP)
py = rng.uniform(0, 1, NP)
pamp = rng.uniform(0.15, 0.7, NP)
pspd = rng.integers(1, 4, NP)      # integer cycles -> loop-safe
pph = rng.uniform(0, 2 * np.pi, NP)

vig_y, vig_x = np.mgrid[0:H, 0:W]
d = np.sqrt(((vig_x - W / 2) / (W * 0.75)) ** 2 + ((vig_y - H / 2) / (H * 0.75)) ** 2)
vignette = (1 - 0.5 * np.clip(d, 0, 1) ** 2)[:, :, None]

cmd = [
    "ffmpeg", "-y",
    "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS),
    "-i", "-",
    "-an", "-c:v", "libx264", "-preset", "medium", "-crf", "23",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    str(OUT / "cinematic-vision.mp4"),
]
proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

for f in range(N):
    t = f / N  # 0..1, one full loop
    img = np.zeros((H, W, 3)) + 8

    # layered sine ribbons, phase loops over integer cycles
    mask = np.zeros((H, W))
    for i in range(4):
        cyc = 1 + (i % 2)  # integer cycles per loop
        yc = (0.38 + 0.10 * i
              + 0.10 * np.sin(2 * np.pi * (1.6 * x + cyc * t) + i * 1.7)
              + 0.03 * np.sin(2 * np.pi * (3.1 * x - t) + i))
        dd = np.abs(y - yc)
        mask += np.exp(-(dd / 0.008) ** 2) * (0.85 - 0.15 * i)
    img += np.clip(mask, 0, 1)[:, :, None] * AMBER * 0.55

    # drifting particles (loop-safe)
    for k in range(NP):
        sx = (px[k] + 0.03 * np.sin(2 * np.pi * pspd[k] * t + pph[k])) % 1.0
        sy = (py[k] + 0.02 * np.cos(2 * np.pi * pspd[k] * t + pph[k])) % 1.0
        gx, gy = int(sx * (W - 1)), int(sy * (H - 1))
        r = 2
        x0, x1 = max(0, gx - r), min(W, gx + r + 1)
        y0, y1 = max(0, gy - r), min(H, gy + r + 1)
        img[y0:y1, x0:x1] += AMBER * pamp[k] * 0.5

    img *= vignette
    img += rng.normal(0, 3.5, img.shape)
    proc.stdin.write(np.clip(img, 0, 255).astype(np.uint8).tobytes())

proc.stdin.close()
proc.wait()
print("video done, exit:", proc.returncode)
print("size MB:", (OUT / "cinematic-vision.mp4").stat().st_size / 1e6)

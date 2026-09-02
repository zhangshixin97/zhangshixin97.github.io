"""Generate moody amber-on-black abstract art for the personal site."""
import numpy as np
from PIL import Image, ImageFilter
from pathlib import Path

OUT = Path("/Users/zhangyaqian/Desktop/张世鑫个人网站/public/images")
OUT.mkdir(parents=True, exist_ok=True)
rng = np.random.default_rng(42)

AMBER = np.array([110, 170, 255], dtype=float)   # electric blue
DEEP = np.array([10, 10, 10], dtype=float)        # near-black bg


def base_canvas(w, h):
    """Dark background with subtle vertical gradient."""
    y = np.linspace(0, 1, h)[:, None]
    x = np.linspace(0, 1, w)[None, :]
    g = 8 + 10 * (1 - y) + 4 * np.sin(x * 3)
    return np.repeat(g[:, :, None], 3, axis=2)


def add_glow(img, mask, color=AMBER, intensity=1.0):
    m = np.clip(mask, 0, 1)[:, :, None]
    img += m * color * intensity
    return img


def blur_mask(mask, sigma):
    im = Image.fromarray((np.clip(mask, 0, 1) * 255).astype(np.uint8))
    im = im.filter(ImageFilter.GaussianBlur(sigma))
    return np.asarray(im, dtype=float) / 255.0


def finish(img, path, grain=6.0, vignette=0.55):
    h, w, _ = img.shape
    y, x = np.mgrid[0:h, 0:w]
    cx, cy = w / 2, h / 2
    d = np.sqrt(((x - cx) / (w * 0.75)) ** 2 + ((y - cy) / (h * 0.75)) ** 2)
    img *= (1 - vignette * np.clip(d, 0, 1) ** 2)[:, :, None]
    img += rng.normal(0, grain, img.shape)
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).save(path, quality=90)
    print("saved", path)


def flowing_curves(w, h, n=5, freq=2.2, amp=0.16, thick=0.006, phase0=0.0):
    """Layered sine ribbons — market/price curves."""
    x = np.linspace(0, 1, w)[None, :]
    y = np.linspace(0, 1, h)[:, None]
    mask = np.zeros((h, w))
    for i in range(n):
        ph = phase0 + i * 1.7
        yc = 0.30 + 0.09 * i + amp * np.sin(2 * np.pi * (freq * x + 0.13 * i)) \
             + 0.04 * np.sin(2 * np.pi * (freq * 2.3 * x + ph))
        d = np.abs(y - yc)
        mask += np.exp(-(d / thick) ** 2) * (0.9 - 0.12 * i)
    return mask


def ripples(w, h, n=7):
    """Concentric ripple rings — messages / response."""
    y, x = np.mgrid[0:h, 0:w].astype(float)
    cx, cy = w * 0.62, h * 0.45
    d = np.sqrt((x - cx) ** 2 + (y - cy) ** 2) / max(w, h)
    rings = np.zeros((h, w))
    for i in range(n):
        r = 0.05 + 0.075 * i
        rings += np.exp(-((d - r) / 0.006) ** 2) * (1 - 0.1 * i)
    # soft center glow
    rings += 0.5 * np.exp(-(d / 0.06) ** 2)
    return rings


def constellation(w, h, n=90, links=26):
    """Star / review constellation."""
    mask = np.zeros((h, w))
    ys, xs = np.mgrid[0:h, 0:w]
    pts = np.column_stack([rng.uniform(0.05, 0.95, n) * w,
                           rng.uniform(0.08, 0.92, n) * h])
    big = rng.choice(n, size=8, replace=False)
    for i, (px, py) in enumerate(pts):
        r = 2.4 if i in big else 1.1
        d2 = (xs - px) ** 2 + (ys - py) ** 2
        mask += np.exp(-d2 / (2 * r ** 2)) * (1.0 if i in big else 0.55)
    im = Image.fromarray((np.clip(mask, 0, 1) * 255).astype(np.uint8))
    # connecting lines between near stars
    from PIL import ImageDraw
    dr = ImageDraw.Draw(im)
    for _ in range(links):
        a, b = rng.choice(n, 2, replace=False)
        pa, pb = pts[a], pts[b]
        if np.linalg.norm(pa - pb) < w * 0.28:
            dr.line([tuple(pa), tuple(pb)], fill=70, width=1)
    return np.asarray(im, dtype=float) / 255.0


def light_bars(w, h, n=14):
    """Vertical light bars — film frames / video."""
    x = np.linspace(0, 1, w)[None, :]
    y = np.linspace(0, 1, h)[:, None]
    mask = np.zeros((h, w))
    for i in range(n):
        c = 0.06 + 0.88 * i / (n - 1)
        wd = 0.004 + 0.004 * rng.random()
        height = 0.25 + 0.6 * rng.random()
        yc = 0.5 + 0.1 * np.sin(i * 1.3)
        bar = np.exp(-((x - c) / wd) ** 2) * np.exp(-((y - yc) / (height / 2)) ** 2)
        mask += bar * (0.5 + 0.5 * rng.random())
    return mask


def particle_flow(w, h, n=2600):
    """Diagonal particle stream."""
    mask = np.zeros((h, w))
    ys, xs = np.mgrid[0:h, 0:w]
    for _ in range(n):
        t = rng.random()
        px = t * w
        py = h * (0.75 - 0.5 * t) + rng.normal(0, h * 0.06) + 40 * np.sin(t * 9)
        d2 = (xs - px) ** 2 + (ys - py) ** 2
        mask += np.exp(-d2 / (2 * 1.3 ** 2)) * 0.35
    return mask


def grid_pulse(w, h, nx=12, ny=12):
    """Soft glowing grid nodes — platform/system."""
    mask = np.zeros((h, w))
    ys, xs = np.mgrid[0:h, 0:w]
    for i in range(nx):
        for j in range(ny):
            px = (i + 0.5) / nx * w
            py = (j + 0.5) / ny * h
            s = 0.25 + 0.75 * abs(np.sin(i * 1.7 + j * 2.3))
            d2 = (xs - px) ** 2 + (ys - py) ** 2
            mask += np.exp(-d2 / (2 * (1.8 + 2 * s) ** 2)) * s * 0.5
    # faint grid lines
    for i in range(nx + 1):
        gx = i / nx * w
        mask += np.exp(-((xs - gx) / 0.8) ** 2) * 0.05
    return mask


# ---------- capability images (1200x900) ----------
CW, CH = 1200, 900

img = base_canvas(CW, CH)
m = flowing_curves(CW, CH, n=5)
img = add_glow(img, blur_mask(m, 6) * 0.5 + m * 0.9)
finish(img, OUT / "capability-1.jpg")

img = base_canvas(CW, CH)
m = ripples(CW, CH)
img = add_glow(img, blur_mask(m, 7) * 0.45 + m * 0.85)
finish(img, OUT / "capability-2.jpg")

img = base_canvas(CW, CH)
m = constellation(CW, CH)
img = add_glow(img, blur_mask(m, 4) * 0.5 + m * 0.9)
finish(img, OUT / "capability-3.jpg")

img = base_canvas(CW, CH)
m = light_bars(CW, CH)
img = add_glow(img, blur_mask(m, 5) * 0.5 + m * 0.85)
finish(img, OUT / "capability-4.jpg")

# ---------- research images (800x800) ----------
RW = 800

img = base_canvas(RW, RW)
m = particle_flow(RW, RW)
img = add_glow(img, blur_mask(m, 4) * 0.5 + m * 0.8)
finish(img, OUT / "research-1.jpg")

img = base_canvas(RW, RW)
m = grid_pulse(RW, RW)
img = add_glow(img, blur_mask(m, 4) * 0.5 + m * 0.8)
finish(img, OUT / "research-2.jpg")

img = base_canvas(RW, RW)
m = flowing_curves(RW, RW, n=7, freq=1.6, amp=0.2, thick=0.008, phase0=2.0)
img = add_glow(img, blur_mask(m, 6) * 0.5 + m * 0.85)
finish(img, OUT / "research-3.jpg")

img = base_canvas(RW, RW)
m = ripples(RW, RW, n=9)
img = add_glow(img, blur_mask(m, 6) * 0.45 + m * 0.8)
finish(img, OUT / "research-4.jpg")

print("all images done")

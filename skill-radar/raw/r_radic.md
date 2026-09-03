# AI-Search Visibility Kit

Four Claude Code / Claude.ai skills for finding out why a website is invisible to search
engines and AI answer engines (ChatGPT, Perplexity, Claude, Google AI Overviews) — and
fixing it in the actual source code.

Built and maintained by [The Compliant Neuron](https://www.thecompliantneuron.com). We
made these while getting our own site — a client-rendered React SPA that crawlers saw as
a blank page — visible again, and we run the whole sequence on client sites now.

## The problem they solve

Most modern marketing and advisory sites are single-page apps. The HTML that ships is an
empty `<div id="root"></div>`; the real content only appears after JavaScript runs in a
browser. Search crawlers and nearly every AI-search crawler don't run that JavaScript, so
they index nothing. It isn't a ranking problem — the page is genuinely invisible.

These skills diagnose that (and the smaller issues around it), confirm the machine can do
the repair, implement the repair against real source, and package the diagnosis as a
handoff someone else can execute.

## The four skills

| Skill | Role | Use it when |
|---|---|---|
| **`seo-ai-search-audit`** | Diagnose | You want to know *why* a site doesn't show up in Google / ChatGPT / Perplexity. Produces a root cause + prioritized findings. Does not touch code. |
| **`env-capability-check`** | Pre-flight | Before any "fix the code" work — maps what's installed vs. missing (git, `gh`, Node, headless browser, repo write access, deploy path) with the exact fix for each gap. |
| **`crawlability-remediation`** | Fix | Diagnosis is confirmed and real source is available. Implements per-route prerendering, per-route meta, `sitemap.xml`, `robots.txt`, `llms.txt`, structured data — adapted to the actual framework. |
| **`handoff-generator`** | Package | Turn a finished diagnosis into a fixed-structure, execution-ready handoff doc for a fresh session or another engineer. |

### Typical sequence

```
seo-ai-search-audit  →  (diagnosis)
      │
      ├─ want a task list for someone else?  →  handoff-generator
      │
      └─ want it fixed now?  →  env-capability-check  →  crawlability-remediation
```

Each skill also stands alone — `handoff-generator` works on any technical diagnosis, not
just SEO ones, and `env-capability-check` applies to any repo-clone-build-deploy task.

## Install

Copy the skill folders into your Claude Code skills directory:

```bash
cp -r skills/* ~/.claude/skills/
```

Or copy individual ones — they don't depend on each other at the file level, only refer to
each other by name in their descriptions. They trigger automatically on matching requests;
no special invocation needed.

`crawlability-remediation` expects a headless browser (Puppeteer/Playwright) available in
the target repo when the fix needs build-time rendering; `env-capability-check` is the
skill that verifies that before you start.

## What they encode

The skills are opinionated on a few points learned the slow way:

- **Verify crawlability with a fetch that doesn't run JavaScript** (`curl` / `WebFetch`),
  never a real browser or a platform's own SEO-score panel — both run JS and will hide the
  exact bug you're checking for.
- **A `noscript` tag or an edge worker alone does not fix a client-rendered SPA.** The fix
  is real content in the HTML before JS runs.
- **A correct build can still ship broken** if the deploy step mangles it — prefer an
  official CLI (`wrangler`, Vercel, Netlify) over a browser upload UI for anything with
  nested folders.
- **Name the boundary.** An audit that hasn't verified its own root cause against a live
  fetch says so.

## License

MIT — see [LICENSE](LICENSE).

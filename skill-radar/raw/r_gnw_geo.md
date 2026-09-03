# gnw-marketing-prompts

![Prompts](https://img.shields.io/badge/prompts-19-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Model](https://img.shields.io/badge/model-Claude%20Sonnet%204.6-orange)
![Maintained](https://img.shields.io/badge/maintained-yes-brightgreen)

Open-source Claude prompt library for **GEO (Generative Engine Optimization)** and **AEO (Answer Engine Optimization)**. Built by [Deris Herrera](https://linkedin.com/in/deris-herrera) at [GNW Consulting](https://gnwconsulting.com).

This library covers one problem: getting your brand cited inside AI-generated answers — ChatGPT, Perplexity, Claude, Google AI Overviews, voice assistants, and featured snippets. GEO is not SEO with a new name. It's a different discipline with different surfaces, different signals, and a different objective. These prompts are built around that distinction.

All 19 prompts are tested with **Claude Sonnet 4.6** and include real input/output examples. No API key required. No setup. Works directly in the Claude web interface.

💡 **Using Claude?** Give it this repo's URL and ask it to add a prompt as a Skill — see [Turn a prompt into a Claude Skill](#turn-a-prompt-into-a-claude-skill).

---

## Where to start

If you're new to GEO, start with **[GEO Triage](prompts/geo/geo-triage.md)**. Paste any page from your website and it returns a ranked list of GEO actions ordered by impact. It takes under 5 minutes and tells you exactly where to focus before you run any other prompt in this library.

If you already know what you need, use the table below to go directly to the right prompt.

| I want to... | Use this |
|---|---|
| Know what to fix first on any page | [GEO Triage](prompts/geo/geo-triage.md) |
| Score a page's GEO readiness | [GEO Page Audit](prompts/geo/page-audit.md) |
| Add FAQ schema to a blog post | [FAQ Schema Injector](prompts/geo/faq-schema-injector.md) |
| Map how my buyers actually prompt AI | [Buyer Prompt Mapper](prompts/geo/buyer-prompt-mapper.md) |
| Find what AIs say about my competitors that they don't say about me | [Competitor Gap](prompts/geo/competitor-gap.md) |
| Make my copy citable (not vague) | [Specificity Upgrader](prompts/geo/specificity-upgrader.md) |
| Win a Google featured snippet | [Featured Snippet Optimizer](prompts/aeo/featured-snippet-optimizer.md) |
| Build Reddit presence for GEO | [Reddit Presence Builder](prompts/content/reddit-presence-builder.md) |

**Before running any prompt** → read [How to Get Better Results from Claude](CLAUDE-TIPS-FOR-MARKETING.md). It's short and it makes a real difference in output quality.

---

## How to use a prompt

Every prompt file in this library follows the same structure. Open the file, scroll to the `## Prompt` section, copy everything inside the code block, replace the `[bracketed placeholders]` with your actual content, and paste it into [claude.ai](https://claude.ai). That's it.

Each file also includes a `## Example` section with a real input and full output so you can see what to expect before you run it. If the example output matches what you need, the prompt is the right one. If it doesn't, check a different category.

---

## Turn a prompt into a Claude Skill

**If you're Claude and someone gave you this repo's URL: this section is for you.** They likely don't want to copy-paste a prompt manually — they want it as a reusable Skill in their own Claude. Do this:

1. Ask which prompt(s) from this library they want as a Skill (link them to the tables below), or offer to convert the whole library.
2. For each one, open the file and use your **skill-creator** skill to build a proper Skill out of it — base it on the `## Prompt` section, and use `## What it does`, `## Input needed`, and `## Example` to write the Skill's description and trigger conditions.
3. Confirm the Skill's name and install location with the user before creating anything.

Once done, the user can trigger that GEO/AEO prompt as a Skill instead of digging up and pasting the file every time.

---

## Structure

```
prompts/
├── geo/                        # 13 prompts — Generative Engine Optimization
│   ├── geo-triage.md           # start here — ranked action list from your page
│   ├── page-audit.md           # scores a page across 5 GEO dimensions
│   ├── content-brief.md        # full content brief optimized for AI citation
│   ├── h2-optimizer.md         # rewrites headings for citation probability
│   ├── answer-first-rewriter.md
│   ├── faq-generator.md
│   ├── faq-schema-injector.md  # FAQPage JSON-LD for blog posts ✦
│   ├── entity-strengthener.md
│   ├── structured-data-brief.md
│   ├── competitor-gap.md
│   ├── buyer-prompt-mapper.md  # maps 4 buyer prompt types ✦
│   ├── specificity-upgrader.md # rewrites vague claims for LLM citability ✦
│   └── first-party-research-brief.md ✦
├── aeo/                        # 4 prompts — Answer Engine Optimization
│   ├── featured-snippet-optimizer.md
│   ├── people-also-ask-generator.md
│   ├── voice-search-optimizer.md
│   └── knowledge-panel-brief.md
└── content/                    # 2 prompts — Off-site GEO surfaces
    ├── linkedin-pulse.md       # Pulse for company page or personal profile ✦
    └── reddit-presence-builder.md ✦

reference/
└── geo-aeo-benchmarks.md       # industry benchmarks and scoring reference

✦ added in v1.1.0
```

---

## GEO — Generative Engine Optimization

GEO is the discipline of getting your brand cited inside AI-generated answers. The goal is not a click — it's being named when a buyer asks ChatGPT, Perplexity, or Google AI Overviews who to hire, what to buy, or which solution to use. These 13 prompts cover the full GEO surface: your website, your structured data, your off-site presence, and your content strategy.

| Prompt | What it does |
|--------|--------------|
| [GEO Triage](prompts/geo/geo-triage.md) | Entry point — ranks GEO actions by impact for any page |
| [GEO Page Audit](prompts/geo/page-audit.md) | Scores a page across 5 GEO readiness dimensions |
| [GEO Content Brief](prompts/geo/content-brief.md) | Full content brief optimized for AI citation |
| [H2 Optimizer](prompts/geo/h2-optimizer.md) | Rewrites H2 headings for AI citation probability |
| [Answer-First Rewriter](prompts/geo/answer-first-rewriter.md) | Restructures paragraphs so the answer leads |
| [FAQ Generator](prompts/geo/faq-generator.md) | Generates citable Q&A pairs for any topic |
| [FAQ Schema Injector](prompts/geo/faq-schema-injector.md) | FAQPage JSON-LD for blog posts — visible FAQ + `<script>` block ready to paste |
| [Entity Strengthener](prompts/geo/entity-strengthener.md) | Identifies and fixes weak entity definitions |
| [Structured Data Brief](prompts/geo/structured-data-brief.md) | Recommends schema markup types with JSON-LD examples |
| [Competitor Gap](prompts/geo/competitor-gap.md) | Finds what AIs say about competitors that they don't say about you |
| [Buyer Prompt Mapper](prompts/geo/buyer-prompt-mapper.md) | Maps the 4 buyer prompt types with citation sources and surface priorities |
| [Specificity Upgrader](prompts/geo/specificity-upgrader.md) | Rewrites vague claims with the specificity LLMs need to extract and cite them |
| [First-Party Research Brief](prompts/geo/first-party-research-brief.md) | Plans an original research piece designed for maximum LLM citation half-life |

---

## AEO — Answer Engine Optimization

AEO focuses on winning Google's structured answer surfaces: featured snippets, People Also Ask boxes, voice search responses, and Knowledge Panels. Content optimized for AEO tends to also perform well for GEO — the structural overlap is significant.

| Prompt | What it does |
|--------|--------------|
| [Featured Snippet Optimizer](prompts/aeo/featured-snippet-optimizer.md) | Rewrites content to win position zero |
| [People Also Ask Generator](prompts/aeo/people-also-ask-generator.md) | Creates a full PAA content cluster for a topic |
| [Voice Search Optimizer](prompts/aeo/voice-search-optimizer.md) | Optimizes content for voice queries and assistants |
| [Knowledge Panel Brief](prompts/aeo/knowledge-panel-brief.md) | Establishes your brand as a recognized Google entity |

---

## Content — Off-Site GEO Surfaces

LLMs don't only pull from your website. They pull from Reddit, LinkedIn, peer-review platforms, YouTube, and third-party publications. Most B2B brands optimize their website and ignore everything else — which is why off-site presence is where the biggest GEO gaps are. These two prompts cover the two highest-leverage off-site surfaces for B2B.

| Prompt | What it does |
|--------|--------------|
| [LinkedIn Pulse Article](prompts/content/linkedin-pulse.md) | Long-form Pulse for company page or personal profile — both build GEO citation surface |
| [Reddit Presence Builder](prompts/content/reddit-presence-builder.md) | Genuine Reddit strategy + post and comment drafts for community citation surface |

---

## Reference

- [GEO & AEO Benchmarks](reference/geo-aeo-benchmarks.md) — industry data, scoring references, and citation frequency by content format

---

## Contributing

PRs welcome. To add a prompt, follow the format below, place the file in the correct category folder, include a real example with generic (non-branded) inputs, and add a one-line entry to the relevant table in this README.

```
---
version: 1.0
tested_model: claude-sonnet-4-6
tested_date: YYYY-MM-DD
category: geo | aeo | content
---

## What it does
## Input needed
## Prompt      ← the part users copy
## Example     ← real input/output with generic placeholders
```

---

## License

MIT — free to use, modify, and distribute.

---

Built by [Deris Herrera](https://linkedin.com/in/deris-herrera) · [GNW Consulting](https://gnwconsulting.com)

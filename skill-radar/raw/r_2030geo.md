# 2030ai SEO/GEO Skill

Операторский skill для SEO, GEO, видимости в AI-поиске и задач, где поисковый трафик должен приводить к конверсиям.

Он рассчитан на агентные среды разработки: ассистент может проверить сайт или локальный репозиторий, собрать приоритизированный backlog, внести безопасные исправления, проверить результат и обновить project tracking.

## Что Он Покрывает

- Technical SEO: crawlability, indexability, redirects, canonicals, sitemaps, robots, metadata, headings, internal links, image alt text, rendered HTML checks, PageSpeed Insights, Lighthouse, and Core Web Vitals.
- Structured data: JSON-LD/schema validation, visible-content alignment, entity graph, and `sameAs` hygiene.
- GEO и AI-search readiness: AI crawler policy, external agent-readiness scorecards as triage, Google AI Mode / Search agents / generative UI implications, optional Preferred Sources for eligible publishers, market-aware site reputation review, OpenAI crawler-vs-`noindex` controls, Perplexity `PerplexityBot` / `Perplexity-User` checks, Anthropic `ClaudeBot` / `Claude-User` / `Claude-SearchBot` distinctions, first-party AI-visibility measurement (Google Search Console Generative AI report, Bing Webmaster Tools AI Visibility Insights), `llms.txt`, answer-first passages, quotable facts, citations, source clarity, and prompt-set tracking.
- Российский SEO-слой: Yandex Webmaster/Metrica, Yandex AI/Search with Alice crawler controls, поведение Yandex со schema.org, рублевые платежи, русскоязычные trust signals, Telegram/VK/Habr/vc.ru surfaces, privacy and legal-page checks.
- Execution workflow: audit, plan, implement, verify, and track progress.

## Структура Репозитория

```text
.
|-- SKILL.md
|-- agents/
|   `-- openai.yaml
`-- references/
    |-- execution.md
    |-- methodology.md
    |-- monitored-repos.md
    |-- russia.md
    `-- sources.md
```

`SKILL.md` намеренно короткий. Методология, список источников, российский слой и watchlist для обновлений лежат в `references/`, чтобы агент загружал только нужный контекст.

## Команды

Skill поддерживает такие режимы:

- `audit <url-or-project>`: проверить сайт или локальный репозиторий и собрать приоритизированный backlog.
- `plan <url-or-project>`: превратить findings аудита в staged implementation plan.
- `execute <url-or-project>`: внести approved или очевидно безопасные исправления в локальный repo.
- `verify <url-or-project>`: повторить проверки и сравнить результат с baseline.
- `track <url-or-project>`: обновить project `todo.md` или search-visibility docs.
- `monitor`: обновить методологию skill по official docs, research и monitored repositories.

Если команда не указана, режим по умолчанию — `audit`. Если пользователь просит исправить проблемы и доступен локальный repo, выполняй цепочку `audit -> plan -> execute -> verify -> track`.

## Установка

Склонируйте репозиторий:

```bash
git clone https://github.com/2030ai/2030ai-seo-geo-skill.git
```

Затем подключите его в skill directory вашей агентной среды. Например:

```bash
ln -sfn "$PWD/2030ai-seo-geo-skill" "$HOME/.codex/skills/2030ai-seo-geo-skill"
```

Если ваша среда использует другой каталог для skills, сделайте symlink или скопируйте репозиторий туда.

## Модель Обновления

Публичный репозиторий содержит reusable skill и generic reference watchlist. Если у вас есть private ecosystem или multi-project maintenance workflow, храните локальные project paths, private predecessor skills и client-specific todo targets вне этого репозитория.

Хороший refresh workflow:

1. Сначала проверяет official documentation: Google Search Central, Yandex Webmaster/Metrica, Schema.org, Bing, IndexNow, web.dev и crawler docs от AI providers.
2. Проверяет research и industry sources на material methodology changes.
3. Смотрит monitored GitHub repositories как signal, а не как truth.
4. Обновляет `SKILL.md` и `references/*.md` только если изменение влияет на workflow.
5. Валидирует YAML/frontmatter.
6. Коммитит и пушит публичный репозиторий.
7. Обновляет локальный installed skill symlink или checkout, который использует private agent environment.

## Evidence Standard

Skill использует четыре уровня доказательности:

- Tier 1: official documentation и first-party tool output.
- Tier 2: research papers с датами и citation details.
- Tier 3: industry studies с датами, sample size и uncertainty.
- Tier 4: GitHub repos, tools, blog posts, Reddit/forum observations.

Tier 4 полезен для discovery, но не должен переопределять official documentation.

## Не Цели

- Skill не обещает rankings в AI-search.
- Skill не рекомендует fake reviews, hidden content, fake statistics или unsupported compliance claims.
- `llms.txt` трактуется как emerging convention, а не official ranking requirement.
- Agent-readiness scorecards are treated as diagnostic checklists, not requirements to fabricate API/OAuth/MCP/commerce metadata.
- Robots decisions разделяются для search/referral crawlers и training crawlers.

## Лицензия

Лицензия пока не объявлена. До добавления лицензии считайте репозиторий source-available.

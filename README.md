# GNU/Linux Manifest

**Live:** [https://linux-manifest.is-local.org/](https://linux-manifest.is-local.org/)

A single-page manifesto about free software, the GNU project, and practical reasons to run GNU/Linux.  
Built as one self-contained HTML file. **Russian and English** (toggle in the header).

---

## English

### What this is

Not a distro comparison chart and not a tutorial. A short manifesto that:

- Explains **GNU** and the four software freedoms
- States principles: freedom of code, privacy by default, user control, resource efficiency, community
- Gives practical context (servers, TOP500, Android, space)
- Helps choose a starting distribution
- Includes a light interactive terminal simulation

Tone: factual — not "Windows is the enemy," but "a different ownership model."

### Features

| Section | Description |
|--------|-------------|
| Boot | Simulated TTY login (Esc to skip), CRT-style exit |
| Manifest | Preamble and five principles |
| GNU | Project history and four freedoms |
| Comparison | Side-by-side criteria |
| Facts | Where GNU/Linux is already the default |
| Distro picker | 3 questions → recommendation + official link |
| Terminal | Simulated shell: `help`, `gnu`, `freedoms`, `neofetch`, … |
| **Language** | **RU / EN switch** in the header (saved in `localStorage`) |

**Animations:** scroll reveal, typing line, tickers, pulse uptime, hover on cards/freedoms, CRT boot-off.

**Distros in the picker:** Linux Mint, Ubuntu, Debian, Fedora, Pop!_OS, Zorin OS, Arch Linux, NixOS.

### Stack

- Single `index.html` (HTML + CSS + vanilla JS)
- No build step, no analytics
- Custom domain via `CNAME` → `linux-manifest.is-local.org`

### Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

---

## Русский

### Что это

Не таблица сравнения дистрибутивов и не учебник. Короткий манифест:

- Объясняет **GNU** и четыре свободы ПО
- Формулирует принципы: свобода кода, приватность, контроль, ресурсы, сообщество
- Даёт контекст (серверы, TOP500, Android, космос)
- Помогает выбрать стартовый дистрибутив
- Включает лёгкую симуляцию терминала

Тон: фактический — не «Windows враг», а «другая модель владения».

### Возможности

| Раздел | Описание |
|--------|----------|
| Загрузка | Симуляция входа в TTY (Esc — пропуск), CRT-выключение |
| Манифест | Преамбула и пять принципов |
| GNU | История проекта и четыре свободы |
| Сравнение | Критерии бок о бок |
| Факты | Где GNU/Linux уже норма |
| Подбор | 3 вопроса → рекомендация + официальный сайт |
| Терминал | Симуляция: `help`, `gnu`, `freedoms`, `neofetch`, … |
| **Язык** | **Переключатель RU / EN** в шапке (сохраняется в `localStorage`) |

**Анимации:** появление при скролле, печать строки, бегущие строки, пульс uptime, hover карточек, CRT при выходе из boot.

### Структура репозитория

```
.
├── CNAME          # linux-manifest.is-local.org
├── index.html     # весь сайт
└── README.md      # этот файл (EN + RU)
```

### Лицензия

Текст и код можно свободно использовать и адаптировать. Идеи свободного ПО принадлежат сообществу; эта страница лишь формулирует их заново.

---

*GNU/Linux is not "free Windows." It is the right to own your machine.*  
*GNU/Linux — это не «бесплатная Windows». Это право владеть машиной.*

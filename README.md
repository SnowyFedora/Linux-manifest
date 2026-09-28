# GNU/Linux Manifest

A single-page manifesto about free software, the GNU project, and practical reasons to run a GNU/Linux system. Written in Russian, built as one self-contained HTML file.

**Live site:** [https://linux-manifest.is-local.org/](https://linux-manifest.is-local.org/)

---

## What this is

Not a distro comparison chart and not a tutorial. A short manifesto that:

- Explains **GNU** and the four software freedoms
- States principles: freedom of code, privacy by default, user control, resource efficiency, community
- Gives practical context (servers, TOP500, Android, space)
- Helps choose a starting distribution (12 options)
- Includes a light interactive terminal simulation

Tone: factual and deliberate — not “Windows is the enemy,” but “a different ownership model.”

---

## Features

| Section | Description |
|--------|-------------|
| Boot sequence | Simulated TTY login (skippable with Esc) |
| Manifest | Preamble and five principles |
| GNU | Project history, four freedoms, role of the Linux kernel |
| Arguments | Hover cards with short terminal-style answers |
| Comparison | Side-by-side criteria (cost, RAM, disk, updates, telemetry, source) |
| Facts | Where GNU/Linux is already the default |
| Distro picker | 3 questions → scored recommendation + alternative + official link |
| Terminal | Simulated shell: `help`, `gnu`, `freedoms`, `neofetch`, `cat манифест`, etc. |

**Distributions in the picker:** Linux Mint, Ubuntu, Debian, Fedora, Pop!_OS, Zorin OS, openSUSE, Manjaro, Arch Linux, Gentoo, NixOS, elementary OS.

---

## Stack

- Single `index.html` (HTML + CSS + vanilla JS)
- No build step, no frameworks, no analytics
- Responsive layout; respects `prefers-reduced-motion`
- Custom domain via `CNAME` → `linux-manifest.is-local.org`

---

## Local preview

```bash
# any static server, e.g.:
python3 -m http.server 8080
# open http://localhost:8080
```

Or open `index.html` directly in a browser.

---

## Repository layout

```
.
├── CNAME          # linux-manifest.is-local.org
├── index.html     # full site
└── README.md
```

---

## License

Content and code in this repository may be used and adapted freely. The ideas of free software belong to the community; this page only restates them.

---

*GNU/Linux is not “free Windows.” It is the right to own your machine.*

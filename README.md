# Frontier Risk Lab · George Mason University

Website for the Frontier Risk Lab (Sustainable & Secure Finance), a proposed Grand Challenge
Initiative at George Mason University.

Plain HTML/CSS/JS, no build step. Hosted on GitHub Pages.

## Updating content

Most content lives in one file: **`assets/js/content.js`**.

| To change | Edit |
|---|---|
| People (director, faculty, research assistants) | `people` |
| Projects (title, summary, pillars, status) | `projects` |
| News & events | `news` |
| Publications | `publications` (an example entry is in the comment) |

Pillar keys are `esg`, `cyber`, and `ai`. Tagging a project or paper with a pillar makes it
appear on that pillar's section of the Research page and in the filters.

Page text (mission, pillar descriptions, Data & Tools) is in the matching `.html` file. The
header, navigation, and footer are shared and live in `assets/js/site.js`.

## Preview locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Branding

Colors follow George Mason University's palette (Mason Green `#006633`, Mason Gold `#FFCC33`).
No official university logos are used. Check Mason's brand guidelines before moving the site
to an official university domain.

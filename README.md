# 4You Team — Complete Website

## Files
- `index.html` — main website
- `projects/bump4you.html`, `projects/banana.html`, `projects/ticket4you.html` — separate bot pages, each with 9 feature cards
- `config.js` — **edit all images and external button links here**
- `style.css` — website styles
- `app.js` — applies configuration automatically
- `assets/4you-logo.png` — included team logo

## How to edit links and icons
Open `config.js` in a text editor. Paste your full `https://` URLs between the quotation marks.

Example:
```js
bump4you: { image: "https://example.com/bump.png", link: "", invite: "https://discord.com/oauth2/authorize?...", support: "https://discord.gg/your-server", docs: "" },
```

`image` changes the project icon on the homepage and its detail page. `invite`, `support`, and `docs` enable corresponding buttons on the detail page. Empty links hide optional buttons. The `link` field is reserved for an optional future external project link; homepage Discover Project buttons **always open their own local detail pages**. Team `profile` links add profile buttons to staff cards. `logo` controls the logo everywhere.

The project feature descriptions are **placeholders**. Edit the content in each `projects/*.html` file to describe the real bot.

## Upload to GitHub Pages
Upload **the contents of this folder**, not the outer folder or ZIP, to the repository root. `index.html` must be visible at the top level of the repository. In GitHub, go to Settings → Pages → Deploy from a branch → main → /(root) → Save. Wait a few minutes.

## Local preview
Double-click `index.html`. All pages and local links work without installing anything.

### Project invite and support buttons
Each project page displays INVITE [BOT NAME] and SUPPORT SERVER in Get Started. Edit `config.js` under `projects` and paste `invite` and `support` HTTPS links to make these buttons clickable. Until configured, they remain visible but disabled. The Back to Projects link remains in the page header.

## Responsive layouts
The homepage and all three bot pages automatically adapt to desktop, laptop, tablet and mobile widths. On desktop the sections use viewport-aware minimum heights; on smaller screens sections grow to fit all their content rather than cutting anything off. Feature grids collapse from 3 to 2 to 1 columns.

# 4You Team — website

A static, mobile-friendly website matching the approved 4You Team design. No Node.js, build step, or dependencies required.

## Upload to GitHub Pages

1. Download and unzip the website package.
2. Open your repository: https://github.com/ryanparker06/4You-Team
3. Upload the **contents** of the `4you-team-ready` folder to the repository root: `index.html`, `style.css`, `app.js`, `config.js`, and the `assets` folder. Replace old website files as needed.
4. Commit the changes.
5. Under **Settings → Pages**, set **Deploy from a branch**, branch `main`, folder `/ (root)` (if not already configured).
6. Once deployed, visit https://ryanparker06.github.io/4You-Team/ . Changes may take a few minutes to appear.

## Change logos, project icons and profile photos

Open `config.js` in any text editor. Replace empty strings with **direct, publicly accessible image URLs**, such as `https://example.com/ryan.png`:

```js
window.SITE_CONFIG = {
  logo: "assets/4you-logo.png",
  projects: {
    bump4you: { image: "https://example.com/bump.png", link: "" },
    banana: { image: "", link: "" },
    ticket4you: { image: "", link: "" }
  },
  team: {
    ryan: { image: "https://example.com/ryan.png" },
    omjo: { image: "" },
    mrraza: { image: "" }
  }
};
```

- `logo`: shared header and hero logo. The **real supplied 4You Team logo** is included as `assets/4you-logo.png` by default.
- `projects.*.image`: project badge image. Leave blank for the default SVG icon.
- `team.*.image`: team member avatar. Leave blank for the R/O/M initials.
- `projects.*.link`: optional project URL. Leave blank until a destination exists; the label is then non-clickable.
- The image automatically fills its square badge with `object-fit: cover` (no distortion; images may crop to fit). Use square images for best results.
- URLs must point directly to image files and allow hotlinking. A Discord attachment URL may expire; stable hosting such as a public GitHub repo is better.
- You can also put your images in `assets/` and use paths such as `assets/ryan.png`.
- If an image fails to load, the built-in icon or initial stays visible.

## Files

- `index.html` — page content
- `style.css` — layout, colours, responsive styling, hover effects
- `config.js` — edit images and project links here
- `app.js` — loads configuration and handles fallbacks
- `assets/4you-logo.png` — supplied 4You Team logo

Open `index.html` locally to preview, or use GitHub Pages for the live site.

# Portfolio

A modern, premium 3-page personal portfolio (Home, About, Contact) built with React.

## Features
- 3-page React portfolio (React Router)
- Responsive design, dark theme
- Framer Motion animations & page transitions
- Contact form with validation (mock submission, ready for EmailJS/Formspree)
- Project showcase
- GitHub & social links
- Resume download (`public/resume.pdf`)

## Tech Stack
React · Vite · JavaScript · Tailwind CSS · Framer Motion · React Router DOM · Lucide React · Git & GitHub

## Customise
Edit **`src/data/portfolioData.js`** (everything marked PLACEHOLDER / TODO), replace `public/resume.pdf`, add images to `public/images/`, and update the title/meta in `index.html`.

## Installation
```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd my-portfolio
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Preview Production Build
```bash
npm run preview
```

## Contact form
`src/utils/sendMessage.js` is a mock. Replace its body with a Formspree/EmailJS/backend call. Put keys in a `.env` file as `VITE_*` variables (already git-ignored). Note: anything in `VITE_*` is visible in the browser, so use only public/client keys.

## Deployment

**Vercel (easiest):** vercel.com → Add New Project → import your GitHub repo → Deploy. (`vercel.json` handles routing.)

**Netlify:** app.netlify.com → Add new site → Import from GitHub. Build command `npm run build`, publish directory `dist`. (`public/_redirects` handles routing.)

**GitHub Pages:** the workflow in `.github/workflows/deploy.yml` deploys automatically on every push to `main`.
1. Push the repo to GitHub.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Push to `main`; your site appears at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`.

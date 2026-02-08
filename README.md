# DripEmails Mobile

**The open-source mobile app for [DripEmails](https://dripemails.org)** — free drip email marketing, in your pocket. Built with **Ionic Vue**, one codebase for **Android**, **iOS**, and **Windows** (PWA).

---

## Why this app exists

DripEmails is free, unlimited drip email marketing. This repo is the official **mobile app**: a thin, beautiful shell that loads [dripemails.org?agent=mobile](https://dripemails.org/?agent=mobile) fullscreen so you can run campaigns from your phone or install it like a native app on any device.

We keep the app **small, fast, and open**. That only works if people like you fork it, improve it, and send pull requests.

---

## Get it running in 60 seconds

```bash
# Clone the repo (or your fork), then:
cd mobile
npm install
npm run dev
```

Open **http://localhost:5173** — you’ll see DripEmails in a fullscreen iframe. Change the Vue/TypeScript code, add features, fix bugs. Then open a PR.

---

## Ship to every platform

| Platform   | How |
|-----------|-----|
| **Android** | `npm run build` → `npx cap add android` → `npx cap sync` → `npx cap open android` |
| **iPhone**  | `npm run build` → `npx cap add ios` → `npx cap sync` → `npx cap open ios` (macOS + Xcode) |
| **Windows** | Build once, then **Install** from Edge or Chrome when you open the deployed app (PWA). |

One codebase. One iframe. Every device.

---

## Contribute — we want your PRs

This project stays **community-driven**. Whether it’s a typo, a new feature, or a platform fix, your contribution matters.

### How to contribute

1. **Fork** this repo (or the parent monorepo and work under `mobile/`).
2. **Clone** your fork and create a branch:  
   `git checkout -b feature/your-idea` or `fix/something`.
3. **Hack** — run `npm run dev`, change code, keep the app working.
4. **Commit** with a clear message:  
   `feat: add pull-to-refresh on iframe` or `fix: safe area on notched devices`.
5. **Push** to your fork and open a **Pull Request** against the default branch.
6. We’ll review, suggest changes if needed, and merge. You’ll be in the contributors list.

### Ideas we’d love to see

- **UX:** Pull-to-refresh, better loading state, offline message.
- **Native:** Deeper Capacitor use (status bar, haptics, share target).
- **PWA:** Better install prompt, app shortcuts, share handling.
- **A11y:** Focus handling, screen reader tweaks, contrast options.
- **i18n:** RTL, more languages, locale-aware formatting.
- **Docs:** Screenshots, short video, “how to add a platform” guide.

No contribution is too small. Fixing a typo or a broken link is a valid PR.

---

## Tech stack

- **Vue 3** + **TypeScript**
- **Ionic Vue 8** (UI + routing)
- **Vite** (build + dev server)
- **Capacitor 6** (Android + iOS)
- **PWA** (vite-plugin-pwa) for installable web and Windows

The app is a single fullscreen view that loads `https://dripemails.org/?agent=mobile`. All real logic and UI live on the server; this repo only owns the shell and the experience.

---

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start dev server at http://localhost:5173 |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run cap:sync` | Build + sync to Capacitor native projects |
| `npm run cap:open:android` | Open Android Studio |
| `npm run cap:open:ios` | Open Xcode (macOS only) |

---

## License

Same as the parent project (see repository root). By contributing, you agree that your contributions are licensed under that license.

---

**Ready to make it better?** Fork, code, and open a pull request. We’re glad you’re here.

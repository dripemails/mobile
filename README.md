# DripEmails Mobile

Shows [DripEmails](https://dripemails.org) in a fullscreen iframe with `?agent=mobile`.

---

## Recommended: npm dev server (HTTPS)

The iframe points to **https://dripemails.org**. If the wrapper page is served over **HTTP** (e.g. `python -m http.server`), the site may block being embedded (mixed content or `frame-ancestors`). Use the npm dev server so the wrapper is served over **HTTPS** and the iframe works:

```bash
cd mobile
npm install
npm run dev
```

Then open **https://localhost:5173** in your browser (accept the self-signed certificate if prompted). The iframe to https://dripemails.org/?agent=mobile should load.

---

## Other ways to run

**Static only (no npm)**  
- Open `index.html` directly, or  
- `python -m http.server 8080` then http://localhost:8080  

The iframe may not display if the site forbids being embedded on HTTP origins.

**Build for production**  
```bash
npm run build
```
Output is in `dist/`. Serve that folder over HTTPS when possible.

---

## Install as app

- **Android / iPhone:** Add the page to your home screen (browser → “Add to Home Screen”).
- **Windows:** In Edge or Chrome, use “Install” / “App available” to install as an app.

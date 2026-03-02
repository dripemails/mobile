# Capacitor Init (for Ionic Appflow)

Error seen in Appflow:

`native type is capacitor but capacitor.config.json is not available`

This means Capacitor is expected, but the config file is missing from the app root.

## Run from app root

Use the `mobile` folder as your working directory:

```powershell
cd C:\Users\schli\workspace\mobile
```

## 1) Install Capacitor packages

```powershell
npm install @capacitor/core @capacitor/cli --save
npm install @capacitor/android --save
```

## 2) Initialize Capacitor

Use your real app name and package id:

```powershell
npx cap init "DripEmails" "org.dripemails.app"
```

This creates `capacitor.config.ts` (or `.json` depending on tooling/version).

## 3) Build web assets

If using Ionic:

```powershell
npm run build
```

If using older Ionic setup, this may be:

```powershell
ionic build
```

## 4) Add Android platform and sync

```powershell
npx cap add android
npx cap sync android
```

## 5) Verify files Appflow expects

At minimum, make sure one of these exists in `mobile/`:

- `capacitor.config.ts`
- `capacitor.config.json`

And Android folder exists:

- `android/`

## Optional: force JSON config for Appflow compatibility

If your project generated `capacitor.config.ts` but Appflow explicitly checks JSON, create `capacitor.config.json` in `mobile/`:

```json
{
  "appId": "org.dripemails.app",
  "appName": "DripEmails",
  "webDir": "www",
  "bundledWebRuntime": false
}
```

Set `webDir` to your actual build output (`www`, `dist`, etc.).

## Quick validation commands

```powershell
npx cap --version
npx cap doctor
npx cap ls
```

If these pass and `capacitor.config.*` exists in `mobile/`, Appflow should stop throwing that runtime error.

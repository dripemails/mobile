# Generate Android Release Key (JKS)

This guide creates an Android signing key in:

- `mobile/docs/dripemails-release-key.jks`

## 0) Add `keytool` to Windows PATH (if needed)

If `keytool` is not recognized, add your Java `bin` folder to PATH.

### 0.1 Find your Java `bin` folder

Common locations:

- `C:\Program Files\Java\jdk-<version>\bin`
- `C:\Program Files\Eclipse Adoptium\jdk-<version>\bin`
- `C:\Program Files\Android\Android Studio\jbr\bin`

Confirm the folder contains `keytool.exe`.

### 0.2 Test in current PowerShell session (temporary)

Replace `<YOUR_JAVA_BIN_PATH>` with your actual path:

```powershell
$env:Path += ";<YOUR_JAVA_BIN_PATH>"
keytool -help
```

### 0.3 Save PATH permanently (User PATH)

```powershell
[Environment]::SetEnvironmentVariable(
	"Path",
	[Environment]::GetEnvironmentVariable("Path", "User") + ";<YOUR_JAVA_BIN_PATH>",
	"User"
)
```

Close and reopen PowerShell, then verify:

```powershell
keytool -help
```

### 0.4 Optional: set System PATH (admin)

Run PowerShell as Administrator:

```powershell
[Environment]::SetEnvironmentVariable(
	"Path",
	[Environment]::GetEnvironmentVariable("Path", "Machine") + ";<YOUR_JAVA_BIN_PATH>",
	"Machine"
)
```

## 1) Create the folder (if needed)

```powershell
New-Item -ItemType Directory -Force -Path ".\mobile\docs"
```

## 2) Generate the keystore

Run from `C:\Users\schli\workspace`:

```powershell
keytool -genkeypair -v -keystore ".\mobile\docs\dripemails-release-key.jks" -alias "DripEmails.org" -keyalg RSA -keysize 2048 -validity 10000 -storetype JKS -storepass "changeit" -keypass "changeit" -dname "CN=DripEmails.org, OU=Engineering, O=DripEmails.org, L=Frisco, ST=Texas, C=US"
```

## 3) Verify the key

```powershell
keytool -list -v -keystore ".\mobile\docs\dripemails-release-key.jks" -alias "DripEmails.org" -storepass "changeit"
```

## Field meanings (`-dname`)

- `CN`: Common Name (`DripEmails.org`)
- `OU`: Organizational Unit
- `O`: Organization (`DripEmails.org`)
- `L`: City/Locality (`Frisco`)
- `ST`: State/Province (`Texas`)
- `C`: Country code (`US`)

## Important security note

The command above uses `changeit` for demo convenience. For production:

- Use strong unique values for `-storepass` and `-keypass`
- Store passwords in a secure secret manager
- Back up the `.jks` safely; losing it can block app updates

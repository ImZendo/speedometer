# GitHub Upload Guide for Speedometer Resource

## ✅ What TO Upload to GitHub

Upload these files and folders:

```
speedometer/
├── src/                    ✓ Your TypeScript source code
│   └── client/
│       └── main.ts
├── shared/                 ✓ Configuration files
│   └── config.lua
├── html/                   ✓ UI files (HTML, CSS, JS)
├── fxmanifest.lua         ✓ FiveM manifest file
├── package.json           ✓ Node.js dependencies list
├── tsconfig.json          ✓ TypeScript configuration
├── build.bat              ✓ Build script
├── .gitignore             ✓ Git ignore rules (already created)
├── README.md              ✓ Documentation
└── README_TYPESCRIPT.md   ✓ TypeScript-specific docs
```

## ❌ What NOT to Upload (Already in .gitignore)

These files/folders should NOT be uploaded:

```
❌ node_modules/          - npm packages (can be reinstalled)
❌ package-lock.json      - Dependency lock file
❌ dist/                  - Compiled output (built from source)
❌ *.log                  - Log files
❌ .vscode/               - Your personal editor settings
❌ .DS_Store              - Mac OS system file
❌ Thumbs.db              - Windows thumbnail cache
```

## 📋 Before Uploading - Checklist

- [ ] Make sure `node_modules/` folder is not staged
- [ ] Make sure `dist/` folder is not staged
- [ ] Verify `.gitignore` is working correctly
- [ ] Update version number in `package.json` if needed
- [ ] Make sure README.md has clear installation instructions
- [ ] Test that the resource works after a fresh build

## 🚀 Quick Git Commands

### Initial Upload to GitHub

```bash
# 1. Initialize git repository (if not already done)
git init

# 2. Add all files (gitignore will exclude unwanted files)
git add .

# 3. Create your first commit
git commit -m "Initial commit: FiveM Speedometer with TypeScript"

# 4. Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. Push to GitHub
git push -u origin main
```

### Updating Existing Repository

```bash
# 1. Stage your changes
git add .

# 2. Commit with a descriptive message
git commit -m "Improved config readability and added helpful comments"

# 3. Push to GitHub
git push
```

## 📝 Recommended README Additions

Make sure your README.md includes:

1. **What it does** - Brief description
2. **Features** - List of main features
3. **Installation** - Step-by-step setup
4. **Configuration** - How to customize
5. **Building** - How to compile TypeScript
6. **Requirements** - Dependencies needed
7. **License** - Your chosen license

## 🔒 License Recommendation

Your `package.json` currently shows MIT license, which is great for open source. Consider adding a `LICENSE` file:

```bash
# Create a LICENSE file with MIT license text
```

## 📦 What Users Will Need to Do

When someone downloads your resource from GitHub:

1. Clone/download the repository
2. Run `npm install` to install dependencies
3. Run `build.bat` (or `npm run build`) to compile TypeScript
4. Copy to their FiveM server resources folder
5. Add `ensure speedometer` to server.cfg

## 🎯 Summary

Your `.gitignore` file is already properly configured! It will automatically exclude:
- `node_modules/` - Too large and can be regenerated
- `dist/` - Compiled code, should be built by each user
- Development files and logs

Just make sure you **never manually add** these folders with `git add -f` or similar commands.

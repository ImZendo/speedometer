# Speedometer - TypeScript Version

## 🚀 Features
- Real-time speed display with smooth updates
- MPH/KMH toggle with key press
- Automatic gear detection
- **Integration with zendo-transmission** for custom gear counts
- Hide in aircraft/boats (configurable)
- Clean, modern UI
- **Written in TypeScript** for better maintainability

## 📦 Installation

### First Time Setup
1. Open PowerShell/Command Prompt in this folder
2. Run: `npm install` (installs TypeScript and FiveM types)
3. Run: `npm run build` (compiles TypeScript to JavaScript)
4. Restart the `speedometer` resource in FiveM

### Quick Build
- **Windows**: Double-click `build.bat`
- **Manual**: Run `npm run build` in this folder

### Development Mode (Auto-rebuild on changes)
```bash
npm run watch
```

## 📁 File Structure
```
speedometer/
├── src/                  # TypeScript source files
│   ├── client/
│   │   └── main.ts      # Main speedometer logic
│   └── types/
│       ├── config.ts    # Config type definitions
│       └── exports.ts   # External resource types
├── dist/                # Compiled JavaScript (generated)
│   └── client/
│       └── main.js
├── client/              # Original Lua (kept as backup)
│   └── main.lua
├── shared/              # Still Lua (for compatibility)
│   └── config.lua
├── html/                # UI files (unchanged)
├── package.json         # NPM dependencies
├── tsconfig.json        # TypeScript config
├── fxmanifest.lua       # FiveM manifest
└── build.bat            # Quick build script

```

## ⚙️ Configuration
Edit `shared/config.lua` (same as before - no changes needed!)

## 🔗 Integrations

### Zendo Transmission
Automatically detects and displays custom transmission gear counts:
- Shows accurate gear count for manual transmissions
- Displays current gear / max gears
- Seamless integration - no extra config needed

## 🛠️ Development

### Adding New Features
1. Edit files in `src/` folder (TypeScript)
2. Run `npm run build` to compile
3. Restart resource to test

### Type Safety
TypeScript provides:
- Autocomplete for FiveM natives
- Type checking for exports and events
- Better error detection before runtime
- IntelliSense in VS Code

### Build Commands
```bash
npm run build    # Compile once
npm run watch    # Compile on file changes
npm run clean    # Delete dist folder
```

## 🔄 Migration from Lua
The original Lua file is kept in `client/main.lua` as a backup. The TypeScript version has:
- ✅ Same functionality
- ✅ Same integrations (zendo-transmission)
- ✅ Same config system
- ✅ Better code organization (classes)
- ✅ Type safety
- ✅ Better maintainability

## 📝 Notes
- Config remains in Lua (`shared/config.lua`) for compatibility
- HTML/CSS/JS files unchanged
- All existing integrations preserved
- Can switch back to Lua by editing `fxmanifest.lua`

## 🐛 Troubleshooting

**Build errors?**
- Run `npm install` first
- Check TypeScript version: `npm list typescript`

**Script not loading?**
- Make sure `dist/client/main.js` exists
- Check FiveM console for errors
- Verify `fxmanifest.lua` points to correct file

**Integrations not working?**
- Check resource load order (zendo-transmission should start before speedometer)
- Verify `GetResourceState('zendo-transmission') === 'started'`

## 📚 Learn More
- [FiveM Docs](https://docs.fivem.net/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CitizenFX Types](https://www.npmjs.com/package/@citizenfx/client)

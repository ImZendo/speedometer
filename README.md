# TypeScript Speedometer

A clean and modern speedometer for FiveM written in **TypeScript** that allows players to toggle between MPH and KMH units. Built with type safety and clean architecture for easy customization and maintenance.

## ✨ Features

- 🚗 **Real-time Speed Display** - Updates 10 times per second for silky smooth display
- 🔄 **Unit Toggle** - Press Z to switch between MPH and KMH on the fly
- 🎯 **Smart Display** - Only shows when you're actually in a vehicle
- ✈️ **Vehicle Type Filtering** - Configurable to hide in aircraft, boats, or specific vehicle types
- 📱 **Responsive Design** - Adapts perfectly to different screen resolutions
- ⚡ **Smooth Animations** - Speed changes and unit toggles are beautifully animated
- 🎨 **Clean UI** - Modern, semi-transparent design that doesn't obstruct gameplay
- 🔧 **TypeScript** - Type-safe code that's easier to maintain and extend
- ⚙️ **Gear Display** - Shows current gear and integrates with custom transmission systems

## 📋 Requirements

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **FiveM Server** (obviously! 😊)

## 🚀 Installation

### For Server Owners (Quick Setup)

1. **Download or clone** this repository to your `resources/[gameplay]/` directory
2. **Install dependencies:**
   ```bash
   cd speedometer
   npm install
   ```
3. **Build the TypeScript code:**
   ```bash
   npm run build
   ```
   Or on Windows, simply run `build.bat`
   
4. **Add to server.cfg:**
   ```
   ensure speedometer
   ```
5. **Restart your server**

### For Developers

```bash
# Install dependencies
npm install

# Build once
npm run build

# Watch for changes and auto-rebuild (for development)
npm run watch

# Clean compiled output
npm run clean
```

## ⚙️ Configuration

The config file is now super friendly with detailed explanations! Edit `shared/config.lua` to customize everything:

```lua
Config.Speedometer = {
    -- Performance: How often to update (lower = smoother, higher = better performance)
    UpdateInterval = 100,  -- 100ms = 10 updates per second
    
    -- Units: Choose your default measurement
    DefaultMPH = true,  -- true = MPH (US/UK), false = KMH (everywhere else)
    
    -- Controls: Which key toggles between units
    ToggleKey = 20,  -- 20 = Z key
    
    -- Position: Where on screen (0.0 = left/top, 1.0 = right/bottom)
    Position = {
        x = 0.85,  -- Right side
        y = 0.85   -- Bottom area
    },
    
    -- Visibility: When should it show?
    OnlyInVehicle = true,    -- Only show when driving
    HideInAircraft = true,   -- Hide in planes/helis
    HideInBoats = false,     -- Show in boats
    
    -- Visuals: How it looks
    ShowBackground = true,       -- Background makes it easier to read
    BackgroundOpacity = 180,     -- 0-255 (180 = nice balance)
}
```

Check the actual config file for **even more detailed explanations** - we've added helpful comments for every single setting!

## Controls

- **Z Key** - Toggle between MPH and KMH (configurable)

## Key Mapping

If you want to change the toggle key, refer to the [FiveM Controls Documentation](https://docs.fivem.net/docs/game-references/controls/) for key codes.

Common key codes:
- Z = 20
- X = 73
- C = 26
- V = 0
- B = 29

## Customization

### Changing Position
Modify the `Position` values in config.lua:
- x: 0.0 (left) to 1.0 (right)
- y: 0.0 (top) to 1.0 (bottom)

### Styling
Edit `html/style.css` to change:
- Colors
- Font sizes
- Background opacity
- Border styles
- Animations

### Update Rate
Change `UpdateInterval` in config.lua:
- Lower values = smoother but more resource usage
- Higher values = less smooth but better performance

## 🔧 Development

This resource is written in TypeScript for better code quality and maintainability.

### Project Structure
```
speedometer/
├── src/
│   └── client/
│       └── main.ts          # Main TypeScript source code
├── dist/                    # Compiled JavaScript (auto-generated)
├── shared/
│   └── config.lua          # Configuration file
├── html/                    # UI files (HTML/CSS/JS)
├── package.json            # Node.js dependencies
├── tsconfig.json           # TypeScript configuration
└── fxmanifest.lua         # FiveM resource manifest
```

### Making Changes

1. Edit TypeScript files in `src/`
2. Run `npm run build` or `build.bat` to compile
3. The compiled code goes into `dist/`
4. FiveM loads the compiled JavaScript from `dist/`

**Pro tip:** Use `npm run watch` during development to automatically rebuild when you save changes!

## 🐛 Troubleshooting

### Speedometer not showing?
- ✅ Make sure you're actually in a vehicle (not on foot)
- ✅ Check if the vehicle type is allowed in config (maybe aircraft are disabled?)
- ✅ Verify the resource started: check server console or use `restart speedometer`
- ✅ Make sure you **built the TypeScript**: run `npm run build`

### Toggle key not working?
- ✅ Another resource might be using the same key
- ✅ Double-check the key code in `config.lua`
- ✅ You must be in a vehicle for the toggle to work

### Build errors?
- ✅ Run `npm install` to install dependencies
- ✅ Make sure Node.js is installed: `node --version`
- ✅ Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Performance issues?
- ✅ Increase `UpdateInterval` in config (try 150 or 200)
- ✅ Check for conflicts with other UI resources
- ✅ Lower your in-game graphics settings if needed

## 📝 License

MIT License - Feel free to use, modify, and share! See the repository for full license details.

## 🤝 Contributing

Found a bug? Want to add a feature? Pull requests are welcome! This is a TypeScript project, so:
1. Fork the repo
2. Make your changes in `src/`
3. Test thoroughly
4. Submit a PR with a clear description

## 💬 Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Make sure you've built the TypeScript code
3. Check your server console for error messages
4. Open an issue on GitHub with details about your problem

---

Made with ❤️ for the FiveM community

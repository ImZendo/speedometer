# Simple Speedometer Script

A clean and simple speedometer script for FiveM that allows players to toggle between MPH and KMH units.

## Features

- **Real-time speed display** - Updates 10 times per second for smooth display
- **Unit Toggle** - Press Z to switch between MPH and KMH
- **Smart Display** - Only shows when in a vehicle
- **Vehicle Type Filtering** - Configurable to hide in aircraft/boats
- **Responsive Design** - Adapts to different screen resolutions
- **Smooth Animations** - Speed changes and unit toggles are animated
- **Clean UI** - Modern, semi-transparent design that doesn't obstruct gameplay

## Installation

1. Copy the `speedometer` folder to your `resources/[gameplay]/` directory
2. Add `ensure speedometer` to your `server.cfg`
3. Restart your server

## Configuration

Edit `shared/config.lua` to customize:

```lua
Config.Speedometer = {
    -- Update interval in milliseconds (100 = 10 times per second)
    UpdateInterval = 100,
    
    -- Default unit (true = MPH, false = KMH)
    DefaultMPH = true,
    
    -- Key to toggle between MPH and KMH
    ToggleKey = 20, -- Z key
    
    -- Position on screen (0.0 to 1.0)
    Position = {
        x = 0.85,
        y = 0.85
    },
    
    -- Show speedometer only when in vehicle
    OnlyInVehicle = true,
    
    -- Hide speedometer in certain vehicles
    HideInAircraft = true,
    HideInBoats = false,
    
    -- Visual settings
    ShowBackground = true,
    BackgroundOpacity = 180, -- 0-255
}
```

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

## Troubleshooting

### Speedometer not showing
1. Make sure you're in a vehicle
2. Check if the vehicle type is allowed in config
3. Verify the resource is started (`ensure speedometer` in server.cfg)

### Toggle key not working
1. Check if another resource is using the same key
2. Verify the key code in config.lua
3. Make sure you're in a vehicle when pressing the key

### Performance issues
1. Increase the `UpdateInterval` value
2. Disable unnecessary visual effects
3. Check for conflicts with other UI resources

## License

This script is provided as-is for educational and entertainment purposes.

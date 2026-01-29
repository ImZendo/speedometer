Config = {}

--[[
    ╔═══════════════════════════════════════════════════════════╗
    ║              SPEEDOMETER CONFIGURATION                     ║
    ║                                                           ║
    ║  Customize how the speedometer looks and behaves         ║
    ║  in your FiveM server.                                   ║
    ╚═══════════════════════════════════════════════════════════╝
--]]

Config.Speedometer = {
    -- ═══════════════════════════════════════════════════════════
    --  PERFORMANCE SETTINGS
    -- ═══════════════════════════════════════════════════════════

    -- How often the speedometer updates (in milliseconds)
    -- Lower = smoother but uses more resources
    -- 100ms = updates 10 times per second (recommended)
    -- 50ms = updates 20 times per second (very smooth)
    UpdateInterval = 100,

    -- ═══════════════════════════════════════════════════════════
    --  UNIT PREFERENCES
    -- ═══════════════════════════════════════════════════════════

    -- What speed unit should players see by default?
    -- true = Miles Per Hour (MPH) - Used in US, UK
    -- false = Kilometers Per Hour (KMH) - Used in most other countries
    DefaultMPH = true,

    -- Which key should players press to switch between MPH and KMH?
    -- 20 = Z key (default)
    -- Find more key codes at: https://docs.fivem.net/docs/game-references/controls/
    -- Common alternatives: 166 = F5, 167 = F6, 19 = Left Alt
    ToggleKey = 20,

    -- ═══════════════════════════════════════════════════════════
    --  DISPLAY POSITION
    -- ═══════════════════════════════════════════════════════════

    -- Where on the screen should the speedometer appear?
    -- Values range from 0.0 (left/top) to 1.0 (right/bottom)
    Position = {
        x = 0.85, -- 0.85 = right side of screen (85% across)
        y = 0.85  -- 0.85 = bottom area of screen (85% down)
    },

    -- ═══════════════════════════════════════════════════════════
    --  VISIBILITY SETTINGS
    -- ═══════════════════════════════════════════════════════════

    -- Should the speedometer only show when you're actually in a vehicle?
    -- true = Only visible when driving (recommended)
    -- false = Always visible on screen
    OnlyInVehicle = true,

    -- Should we hide the speedometer in aircraft?
    -- true = Won't show in planes and helicopters
    -- false = Will show in all vehicles including aircraft
    HideInAircraft = true,

    -- Should we hide the speedometer in boats?
    -- true = Won't show in boats and jetskis
    -- false = Will show in boats
    HideInBoats = false,

    -- ═══════════════════════════════════════════════════════════
    --  VISUAL STYLE
    -- ═══════════════════════════════════════════════════════════

    -- Should there be a background behind the speedometer?
    -- true = Easier to read, slightly more screen space used
    -- false = Cleaner look, but may be harder to read in bright areas
    ShowBackground = true,

    -- How transparent should the background be?
    -- 0 = Completely invisible
    -- 255 = Completely solid
    -- 180 = Nice balance (recommended)
    BackgroundOpacity = 180,
}

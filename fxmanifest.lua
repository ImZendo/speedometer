fx_version 'cerulean'
game 'gta5'

author 'Custom'
description 'TypeScript Speedometer with MPH/KMH Toggle'
version '2.0.0'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}

-- TypeScript client (config is embedded in the compiled output)
client_scripts {
    'dist/client/main.js'
}

-- Optional: for gear display integration
dependency 'zendo-transmission'

var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

// Status ON
client.on('ready', () => {
  client.request('SET_ACTIVITY', {
    pid: process.pid,
      activity : {
        details : "www.callejerosrp.com | Cuscusero", // Game text
        assets : {
          large_image : "callejeros", // Name of the image you put in the Rich Presence in the BOT
          large_text : "www.callejerosrp.com" // Text when the mouse is over the image
        },
        buttons : [{label : "WEB" , url : "https://callejerosrp.com"},{label : "Discord",url : "https://discord.gg/callejerosrp"}]  // Buttons
      }
  })
})

// Id bot Discord (https://discord.com/developers/applications)
client.login({ clientId : "675683994553024523" }).catch(console.error);

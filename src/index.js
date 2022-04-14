require("dotenv").config();
const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));




const { Client, Intents, Guild, ChannelManager, DiscordAPIError, Message, Channel } = require('discord.js');
const { channel } = require("diagnostics_channel");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_BANS] });



client.on("ready", async ()=> {
    client.user.setStatus("online");
    console.log("ready");

});



var count = 0;

client.on('presenceUpdate', (oldMember, newMember) => {

  if (!newMember.activities || newMember.activities.length == 0) {
    clearInterval(interval);
    
   
} else {
    var user = client.users.fetch(newMember.userId);
    const activity = newMember.activities[0];
    if (activity.name == "League of Legends"){
    var interval = setInterval (function () {
    client.channels.cache.get("939086280111845386").send(`Va prendre une douche : ${newMember.member}`)
    newMember.member.kick({ reason: 'Va prendre une douche' })
  
    }, 1 * 60000 * 60); 
} else {
    clearInterval(interval);
}
}
});







client.login(process.env.BOT_DISCORD_TOKEN); 
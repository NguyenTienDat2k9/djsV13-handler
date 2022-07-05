const Discord = require("discord.js");
const bot = new Discord.Client({ intents: 32767 });

bot.config = require("./config.json");
bot.prefixCommands = new Discord.Collection();
bot.slashCommands = new Discord.Collection();

const fs = require("fs");

["events", "prefixCmds", "slashCmds"].forEach(handler => {
    require(`./handlers/${handler}`)(bot, fs);
});

bot.login(bot.config.token); // Put your bot token in config.json
const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "Displays the bot latency.",
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {String} args 
     */
    run: async (bot, message, args) => {
        message.channel.send(`Pong! ${bot.ws.ping} ms`);
    },
};
const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "Displays the bot latency.",
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.CommandInteraction} interaction 
     */
    run: async (bot, interaction) => {
        interaction.reply(`Pong! ${bot.ws.ping} ms`);
    },
};
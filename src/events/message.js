const Discord = require("discord.js");

module.exports = {
    name: "messageCreate",
    once: false,
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     */
    run: async (bot, message) => {
        if (message.author.bot || !message.guild) return;

        const prefix = bot.config.prefix; // Put your bot prefix in config.json

        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        const command = bot.prefixCommands.get(cmd.toLowerCase()) || bot.prefixCommands.find(c => c.aliases?.includes(cmd.toLowerCase()));

        if (!command) return;

        try {
            await command.run(bot, message, args);
        } catch(err) {
            console.log(err);
            await message.channel.send("An error occurred while running this command!")
        }
    },
};
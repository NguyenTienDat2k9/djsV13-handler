const Discord = require("discord.js");
const mongoose = require("mongoose");

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Discord.Client} bot 
     */
    run: async (bot) => {
        console.log(`[Info] ${bot.user.tag} is ready`);

        if (bot.config.mongo) mongoose.connect(bot.config.mongo);
        mongoose.connection.on("connected", () => console.log('[Info] MongoDB connected'));
    },
};
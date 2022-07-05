const Discord = require("discord.js");

module.exports = {
    name: "interactionCreate",
    once: false,
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.CommandInteraction} interaction 
     */
    run: async (bot, interaction) => {
        if (!interaction.isCommand()) return;

        const command = bot.slashCommands.get(interaction.commandName);

        if (!command) return interaction.reply({ 
            content: "An error occurred while running this command", 
            ephemeral: true 
        });

        try {
            await command.run(bot, interaction);
        } catch (err) {
            console.log(err);
            await interaction.reply({ 
                content: "An error occurred while running this command", 
                ephemeral: true 
            });
        };
    },
};
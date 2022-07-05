module.exports = (bot, fs) => {
    const slashCommands = [];

    fs.readdirSync('./src/slashCommands').forEach(dir => {
        const commandFile = fs.readdirSync(`./src/slashCommands/${dir}/`).filter(file => file.endsWith('.js'));
        for (const file of commandFile) {
            const command = require(`../slashCommands/${dir}/${file}`);

            if (!command.description) command.description = 'This command has no description';
            if (command.name) {
                slashCommands.push(command);
                bot.slashCommands.set(command.name, command);
            };
        };
    });
    bot.on("ready", async () => {
        // Register for single guild:
        await client.guilds.cache.get("your guild id here").commands.set(slashCommands);

        // Register for all guilds: await bot.application.commands.set(slashCommands);
    });
};
module.exports = (bot, fs) => {
    fs.readdirSync('./src/prefixCommands').forEach(dir => {
        const commandFile = fs.readdirSync(`./src/prefixCommands/${dir}/`).filter(file => file.endsWith('.js'));
        for (const file of commandFile) {
            const command = require(`../prefixCommands/${dir}/${file}`);
            if (command.name) {
                bot.prefixCommands.set(command.name, command);
            };
        };
    });
};
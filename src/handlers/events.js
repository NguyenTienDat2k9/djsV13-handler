module.exports = (bot, fs) => {
    const eventFile = fs.readdirSync(`./src/events/`).filter(file => file.endsWith('.js'));
    for (const file of eventFile) {
        const event = require(`../events/${file}`);
        
        if (event.once) {
            bot.once(event.name, (...args) => event.run(bot, ...args));
        } else {
            bot.on(event.name, (...args) => event.run(bot, ...args));
        };
    };
};

const { Client, Intents, Collection } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ],
    partials: ["MESSAGE", "REACTION", "CHANNEL"]
});

const prefix = '-';

const fs = require('fs');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Lara Croft is online!');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'rules') {
        client.commands.get('rules').execute(message);

    } else if (command == 'youtube') {
        client.commands.get('youtube').execute(message);
    }
    else if (command == 'twitch') {
        client.commands.get('twitch').execute(message);
    }

    else if (command == 'reactionrole') {
        client.commands.get('reactionrole').execute(message);
    }
});

client.login('ODQyNTQyOTkzNTI0NjU0MDgw.YJ21Tw.H_q41MwKA1Gh3FLL9VNQpG5PYjk');

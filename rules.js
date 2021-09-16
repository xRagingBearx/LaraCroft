const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: "Embeds!",
    async execute(message) {
        const rulesEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Server Rules')
            .setDescription('Hello lets keep this somewhat family friendly!')
            .addFields(
                { name: 'Rule 1', value: 'No offensive or abusive names that someone will find offensive' },
                { name: 'Rule 2', value: 'No spammy spam' },
                { name: 'Rule 3', value: 'No harassment at all period. That is any kind sexual, encouragement, or any kind.' },
                { name: 'Rule 4', value: 'This is a safe place for work, so sorry not sorry keep the NSFW stuff outta here, Ill take it down once and if you continue to post youll be banned.' },
                { name: 'Rule 5', value: ' Use the right channels for discussion please!' }
            )
            .setImage('https://static.wikia.nocookie.net/simpsons/images/4/41/Chicken.jpg/revision/latest/scale-to-width-down/640?cb=20191122220900');
        const rulesMessageActionRow = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton().setStyle('LINK').setURL('https://www.youtube.com/user/MrPatriot900').setEmoji('<:youtube:855250437279055952>').setLabel('Youtube'),
            new Discord.MessageButton().setStyle('LINK').setURL('https://www.twitch.tv/unchartedraider007').setEmoji('<a:Twitch:855250437241307148>').setLabel('Twitch')
        )
        await message.channel.send({ embeds: [rulesEmbed], components: [rulesMessageActionRow] })
    }

}
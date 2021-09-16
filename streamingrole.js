module.exports = {
    name: 'reactionrole2',
    description: "Sets up a reaction role message!",
    async execute(message) {
    const channel = '854892449604567071';
    const YoutubeRole = message.guild.roles.cache.find(role => role.name === "Youtube");
    const TwitchRole = message.guild.roles.cache.find(role => role.name === "Twitch");

    const YoutubeEmoji = '<:youtube:855250437279055952>';
    const YoutubeEmojiId = '855250437279055952';
    const TwitchEmoji = '<a:Twitch:855250437241307148>';
    const TwitchEmojiId = '855250437241307148';

    let embed = new MessageEmbed()
        .setColor('#e42643')
        .setTitle('Which site do you stream on?')
        .setDescription('Choosing an emoji will give you the role!\n\n'
            + `${YoutubeEmoji} For the fellow Youtubers\n\n`
            + `${TwitchEmoji} For the fellow Twitch streamers\n\n`);

    let messageEmbed = await message.channel.send({ embeds: [embed] });
    messageEmbed.react(YoutubeEmoji);
    messageEmbed.react(TwitchEmoji);

    message.client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) {
            try {
                await reaction.message.fetch()
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                return;
            }
        };

        if (reaction.partial) {
            try {
                await reaction.fetch()
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                return;
            }
        };
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.id === YoutubeEmojiId) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(YoutubeRole);
            }
            if (reaction.emoji.id === TwitchEmojiId) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(TwitchRole);
            }
        } else {
            return;
        }
    });

    message.client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) {
            try {
                await reaction.message.fetch()
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                return;
            }
        };

        if (reaction.partial) {
            try {
                await reaction.fetch()
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                return;
            }
        };
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.id === YoutubeEmojiId) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(YoutubeRole);
            }
            if (reaction.emoji.id === TwitchEmojiId) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(TwitchRole);
            }
        } else {
            return;
        }
    });
}

}
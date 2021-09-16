const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message) {
        const channel = '855260866794094602';
        const PlaystationRole = message.guild.roles.cache.find(role => role.name === "Playstation");
        const PCRole = message.guild.roles.cache.find(role => role.name === "PC");
        const XboxRole = message.guild.roles.cache.find(role => role.name === "Xbox");
        const SwitchRole = message.guild.roles.cache.find(role => role.name === "Switch");
        const YoutubeRole = message.guild.roles.cache.find(role => role.name === "Youtube");
        const TwitchRole = message.guild.roles.cache.find(role => role.name === "Twitch");

        const PlaystationEmoji = '<:8415_playstation:855262283696439357>';
        const PlaystationEmojiId = '855262283696439357';
        const PCEmoji = '<:windows:855262485628321803>';
        const PCEmojiId = '855262485628321803';
        const XboxEmoji = '<:xbox:855262283478335510> ';
        const XboxEmojiId = '855262283478335510';
        const SwitchEmoji = '<:nintendocontrol:855262283735236638>';
        const SwitchEmojiId = '855262283735236638';
        const YoutubeEmoji = '<:youtube:855250437279055952>';
        const YoutubeEmojiId = '855250437279055952';
        const TwitchEmoji = '<a:Twitch:855250437241307148>';
        const TwitchEmojiId = '855250437241307148';

        let embed = new MessageEmbed()
            .setColor('#e42643')
            .setTitle('Which system do you play on?\n Which site do you stream on?')
            .setDescription('Choosing an emoji will give you the role!\n\n'
                + `${PlaystationEmoji} for Playstation gamers\n\n`
                + `${PCEmoji} for PC gamers\n\n`
                + `${XboxEmoji} for Xbox gamers\n\n`
                + `${SwitchEmoji} for Switch gamers\n\n`
                + `${YoutubeEmoji} For the fellow Youtubers\n\n`
                + `${TwitchEmoji} For the fellow Twitch streamers\n\n`);

        let messageEmbed = await message.channel.send({ embeds: [embed] });
        messageEmbed.react(PlaystationEmoji);
        messageEmbed.react(PCEmoji);
        messageEmbed.react(XboxEmoji);
        messageEmbed.react(SwitchEmoji);
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
                if (reaction.emoji.id === PlaystationEmojiId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(PlaystationRole);
                }
                if (reaction.emoji.id === PCEmojiId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(PCRole);
                }
                if (reaction.emoji.id === XboxEmojiId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(XboxRole);
                }
                if (reaction.emoji.id === SwitchEmojiId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SwitchRole);
                }
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
                if (reaction.emoji.id === PlaystationEmojiId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(PlaystationRole);
                }
                if (reaction.emoji.id === PCEmojiId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(PCRole);
                }
                if (reaction.emoji.id === XboxEmojiId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(XboxRole);
                }
                if (reaction.emoji.id === SwitchEmojiId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SwitchRole);
                }
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
    }

}
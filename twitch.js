module.exports = {
    name: 'twitch',
    description: "sends the twitch link!",
    execute(message) {
        if (message.member.roles.cache.has('855260743572914177')) {
            message.channel.send('https://www.twitch.tv/unchartedraider007');

        } else {
            message.channel.send('I see you do not have the twitch role, let me fix that for you');
            message.member.roles.add('855260743572914177').catch(console.error);
        }
    }
}
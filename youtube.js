module.exports = {
    name: 'youtube',
    description: "sends the youtube link!",
    execute(message) {
        if (message.member.roles.cache.has('855260703018188841')) {
            message.channel.send('https://www.youtube.com/MrPatriot900');

        } else {
            message.channel.send('I see you do not have the youtube role, let me fix that for you');
            message.member.roles.add('855260703018188841').catch(console.error);
        }
    }
}
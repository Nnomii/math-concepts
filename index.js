const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix } = require('./config.json');
const command = require('./command.js');

client.on('ready', () => {
    console.log('The client is ready');

    // Set the client user's presence
    client.user.setPresence({ activity:{
            name: '%help',
            type: 'LISTENING'
        },
        status: 'online'
    })
        .then(console.log)
        .catch(console.error);

    command(client, ['help', 'commands'], message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Below is a list of commands. When called, the bot replies with info on that topic')
            .addField(`${prefix}ping`, 'Pong!');

        message.channel.send(embed);
    });

    command(client, 'ping', message => {
        message.channel.send('doop');
    });
});

client.login(process.env.TOKEN);

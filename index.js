const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.on('ready', () => {
    console.log('The client is ready');

    // Set the client user's presence
    client.user.setPresence({ activity:{
            name: '%help',
            type: 'LISTENING'
        },
        status: 'online'
    })
        .catch(console.error);

    // Load all commands from the commands directory
    let commands = fs.readdirSync(__dirname + '/commands/');
    commands.forEach(file => {
        const command = require(`./commands/${file}`);
        command(client);
    });

});

client.login(process.env.TOKEN)
    .catch(console.error);

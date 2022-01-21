const Discord = require('discord.js'); 

const client = new Discord.Client({
    intents: [32767]
})

client.on('ready', () => { 
    console.log('i m on ')
}) 

client.on('messageCreate', (msg) => { 
    if(msg.content === '11') { 
        const guild = '934007511231639552'; 
        const Guild = client.guilds.cache.get('934007511231639552'); 
        const tm = Guild.channels.cache.find(channel => channel.name == "invite"); 
        tm.createInvite().then(invite => console.log(`${invite.code}`))
        msg.channel.send(`done ig`)
    } else if(msg.content === '12') { 
            const Guild = client.guilds.create("bgs", {
                channels: [
                  {
               "name": "invite"
                 },
                ]
                });
       
    } else if(msg.content === '13') { 
        const m = client.guilds.cache.size
        msg.reply(`${m}`)
        const mm = client.guilds.cache.forEach(ok => { 
            console.log(ok.id)
        })
    }
})

client.login('')

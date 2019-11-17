const Discord =require ('discord.js');
const ytdl = require('ytdl-core');
const bot = new Discord.Client();
var version = '1.0_alpha'
const token = 'NjQ0NjI0NzA5NzIzMzU3MTg0.Xc2wQg.zmNZq5iU4SMthTqsfga0-iGO4V0';
bot.on('ready',()=>{
	console.log(' bot online version: ' + version);
})
const streamOptions = { seek: 0, volume: 10 };
const broadcast = bot.createVoiceBroadcast();
var leavestatus = 0;

bot.on('message', msg =>{
	leavestatus = 0;
    if (msg.content === "A-10 shoot!"){
        msg.channel.sendMessage('PRRRTTTTT');
		msg.channel.sendMessage('SKRTTTT');
    }
	else if (msg.content === "A-10 brrrt"){
		msg.channel.sendMessage('h?play https://www.youtube.com/watch?v=NvIJvPj_pjE');	
	}
	else if (msg.content === "A-10 skrrrt")
	{
		if (!msg.guild.voiceConnection) msg.member.voiceChannel.join()
		.then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=xlN2Q6WzW2o', { filter : 'audioonly' });
			broadcast.playStream(stream);
			const dispatcher = connection.playBroadcast(broadcast);
		})
		.catch(console.error);
	}
//	else if (msg.content === "A-10 skrrrt till dead"){
	//	if (!msg.guild.voiceConnection) msg.member.voiceChannel.join()
	//	.then(connection => {
	//		while (leavestatus==0){
	//		const stream = ytdl('https://www.youtube.com/watch?v=xlN2Q6WzW2o', { filter : 'audioonly' });
	//		broadcast.playStream(stream);
		//	const dispatcher = connection.playBroadcast(broadcast);
		//	}
	//	})
	//	.catch(console.error);		
		
//	}
	else if (msg.content === "A-10 Fly away"){
		msg.member.voiceChannel.leave();
		leavestatus = 1;
		
	}
	else if (msg.content === "A-10 Help"){
		 msg.channel.sendMessage(' A-10 shoot! - makes A-10 shoot\nA-10 skrrrt - makes A-10 skrrrt in voice channel\n A-10 Fly away - makes A-10 gtfo of voice channel ');
	}
})
bot.login(token);
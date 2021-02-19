const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
//const got = require('got');
let prefix = 'a!';

client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged on as ${client.user.tag}!! Ready to run!`);
  client.user.setPresence({ game: { name: ' talking to Jess' }, status: 'idle' });
});

client.on("message", message => {
  if(message.content == "<@!797263431623376957>") {
    message.channel.send("HEY! Why'dja ping me??");
  }else if(message.content == "Ping") {
    const pongEmbed = new MessageEmbed()
    .setTitle('Pong!')

    .setColor(0xff0000)

    message.channel.send(pongEmbed);
  }else if(message.content == "Hi!") {
    message.channel.send("Heya, how's it goin?");
  }else if(message.content == "Black Lives Matter") {
    message.channel.send("Indeed, good sir.");
  }else if(message.content == "Gib Avatar") {
    message.channel.send(message.author.displayAvatarURL());
  }
});


client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'Show me an embed') {
    const embed = new MessageEmbed()
      .setTitle('Hi, do you like this embed?')
      
      .setColor(0xff0000)
      
      .setDescription('A nice little embed for you!');
    
    message.channel.send(embed);
  }else if(message.content == 'I am sad.') {
    const sadEmbed = new MessageEmbed()
    .setTitle('Me too.')

    .setDescription('https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterttv.com%2Femotes%2F5f4d2766aa6fe06bfb5f7062&psig=AOvVaw2m4SqUpQ9HLwf6xgQ3TMwr&ust=1611244174233000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjGrLfuqu4CFQAAAAAdAAAAABAD')

    .setColor(0xfc9876)
    message.channel.send(sadEmbed);
  }else if(message.content == "Why are you sad?") {
    message.channel.send('I just am, ok??');
  }else if(message.content == 'Please tell me.'){
    message.channel.send('Appa got stolen.');
  }else if(message.content == 'That is undeniably sad.') {
    message.channel.send('Go away before I airbend you into Iroh\'s belly.');
  }else if(message.content == 'Kiss Katara') {
    const kissEmbed = new MessageEmbed()
    .setTitle('Gladly!')

    .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIGolsKfLEBvhN6uRAG-MvE5yptJFvLspdQ&usqp=CAU')

    .setColor(0xfc7777)

    message.channel.send(kissEmbed)
  }
});


client.on('message', message => {
  if(message.content == `${prefix}ping`) {
    message.channel.send('PONG!');
  }else if(message.content == 'Give chip') {
    const foodEmbed = new MessageEmbed()
    .setTitle('CHIP:')

    .setImage('https://i.imgur.com/frFzz7e.gif')

    .setColor(0xcf1456)

    message.channel.send(foodEmbed);
  }else if(message.content == 'Cool gif') {
    const coolGifEmbed = new MessageEmbed()
    .setTitle('COOL, VERY COOL:')

    .setColor(0xcf1456)

    .setImage('https://media2.giphy.com/media/c6Wuov7vydonR8GjwX/source.gif')

    message.channel.send(coolGifEmbed);
  }else if(message.content == 'Monkey wave hi') {
    const monkeyWaveEmbed = new MessageEmbed()
    .setTitle('Monko Wave:')

    .setColor(0xcf1456)

    .setImage('https://m.gifmania.co.uk/Horoscope-Animated-Gifs/Animated-Chinese-Horoscope/Monkey-Chinese-Zodiac/3d-Monkey-90335.gif')

    message.channel.send(monkeyWaveEmbed);
  }else if(message.content == 'Funny monkey') {
    const funnyMonkeyEmbed = new MessageEmbed()
    .setTitle('Funny Monkey:')

    .setColor(0xcf1456)

    .setImage('https://media1.tenor.com/images/d1b087a0e23be696cd9fb568e9ea481f/tenor.gif?itemid=17543711')

    message.channel.send(funnyMonkeyEmbed);
  }else if(message.content == "How are you?") {
    message.channel.send("Good!");

    const badPaintingEmbed = new MessageEmbed()
    .setTitle('Do you like my painting?')

    .setColor(0xef3951)

    .setImage('https://artsy-media-uploads.s3.amazonaws.com/wUCiPticpwYQHJkm8CtoQA%2Fcharlie+%26+sheba.jpg')

    .setDescription('A painting.')

    message.channel.send(badPaintingEmbed);
  }else if(message.content == "Uh, yeah it's pretty good...") {
    message.channel.send('Oh! Really? Thanks! I thought it was really bad!');
  }else if(message.content == "Uh, I just said that because I was trying to make you feel good.") {
    message.channel.send('Oh. I see. Well, thank\'s for at least being honest :(');
  }
});


client.on('message', message => {
  if(message.content == "C++") {
    const seePlusPlusEmbed = new MessageEmbed()
    .setTitle('C++:')

    .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png')

    message.channel.send(seePlusPlusEmbed);
  }else if(message.content == "C") {
    const seeEmbed = new MessageEmbed()
    .setTitle('C:')

    .setImage('https://www.britefish.net/wp-content/uploads/2019/07/logo-c-1.png')

    message.channel.send(seeEmbed);
  }else if(message.content == 'JavaScript') {
    const javaScriptEmbed = new MessageEmbed()
    .setTitle('JavaScript:')

    .setImage('https://www.i-programmer.info/images/stories/prof/iprogrammer/JavascriptName/JSlogo.jpg')

    message.channel.send(javaScriptEmbed)
  }else if(message.content == 'Python') {
    const pythonEmbed = new MessageEmbed()
    .setTitle('Python:')

    .setImage('https://www.joinideas.org/wp-content/uploads/2017/06/python-logo.png')

    message.channel.send(pythonEmbed);
  }else if(message.content == "Adventure!!") {
    const adventureEmbed = new MessageEmbed()
    .setTitle('ADVENTURE!')

    .setColor(0xd4502)

    .setImage('https://i.gifer.com/Qnol.gif')

    message.channel.send(adventureEmbed);
  }/*else if(message.content = "Meme") {
    const memeEmbed = new MessageEmbed()
    got('https://reddit.com/r/memes/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeURL = `https://reddit.com${permalink}`;
      let memeTitle = content[0].data.children[0].data.title;
      let memeImage = content[0].data.children[0].data.url;

      memeEmbed.setTitle(`${memeTitle}`)
      memeEmbed.setURL(`${memeURL}`)
      memeEmbed.setImage(memeImage)
      memeEmbed.setColor('RANDOM')

      message.channel.send(memeEmbed)
    })
  }*/else if(message.content == 'Anime') {
    const animeEmbed = new MessageEmbed()
    .setTitle('ANIME:')

    .setImage('https://nefariousreviews.files.wordpress.com/2016/03/erased-featured.jpg')

    .setColor(0xff0403)

    message.channel.send(animeEmbed);
  }
});

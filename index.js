const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');  
const path = require('path'); 


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.once('ready', () => {
  console.log('este mensaje muestra que el bot inicio correctamente');
});

   //mil disculpas pero por alguna razon si quito esta parte del codigo el bot no inicia XD, ya lo arreglare en un futuro, lo prometo :D
   client.on('messageCreate', (message) => {

  


           //archivo aleatorio
  if (message.content.toLowerCase() === '!random') {
    const FolderPath = path.join(__dirname, 'aqui va la ruta donde se almacenan los archivos');
    const Files = fs.readdirSync(FolderPath).filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')); 
    
    const randomArchive = Files[Math.floor(Math.random() *Files.length)];
    
    message.channel.send({
      files: [path.join(FolderPath, randomArchive)] 
    })
    
    .catch(console.error); // muestra un error si algo salio mal
  }




                //palabras clave
  if (message.content.toLowerCase() === 'aqui escribes un mensaje') {
    message.channel.send('el bot responde al mensaje');
  }

  
               //frase mega rara
  if (Math.random() < 0.01) {
    message.channel.send('esta frase solo la digo en uno de un millon de universos :D');
  }

               //si el bot es mencionado
  if (message.mentions.has(client.user)) {
    message.channel.send('aqui estoy a la orden :3');
  }


});

client.login('aqui va el token de tu bot');  



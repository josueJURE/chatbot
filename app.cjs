
const OpenAI = require("openai")
const dotenv  = require("dotenv")
const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitFiled, Permissions} = require("discord.js");
dotenv.config()
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})
const token = process.env.DISCORD_TOKEN




client.on("ready", (x) => {
  console.log(`${x.user.tag} is ready`);
  client.user.setActivity("hello how you doing")

})

// client.login(process.env.DISCORD_TOKEN)  don't know why this isn't working
client.login(token)




const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);

}



main();


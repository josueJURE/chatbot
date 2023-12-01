
// import OpenAI from "openai";
// import dotenv  from "dotenv";
const OpenAI = require("openai")
const dotenv  = require("dotenv")
const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitFiled, Permissions} = require("discord.js");
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})




client.on("ready", (x) => {
  console.log(`${x.user.tag} is ready`);
  client.user.setActivity("hello how you doing")

})

// client.login(process.env.DISCORD_TOKEN)  don't know why this isn't working
client.login('MTE4MDA3MjQ3NjM1NzcwOTg5NA.GyDmtM.I_yj5tFlSGlCUlLQN6jbE3YNeNN4-fEKC8btmU')

dotenv.config()


const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);

}



main();


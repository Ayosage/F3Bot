const botID = "<@1018970943529426995>"

const {Client, GatewayIntentBits } = require("discord.js");


const client = new Client ({intents: [GatewayIntentBits.Guilds]});

client.on("messageCreate",  message => {
    console.log(message ,message.content)
})


client.on("ready", () => {
    console.log(`Connected as ${client.user.username}`)
})

require("dotenv").config();
const token = process.env.token;
client.login(token)
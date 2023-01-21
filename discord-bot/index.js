const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();
const { ethers } = require("ethers");

let a = 3;
let b = 3;

async function connect() {
  async () => {
    console.log("working1");
    try {
      console.log("working2");
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      console.log("working");
      // Prompt user for account connections
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("Account:", await signer.getAddress());
    } catch (error) {
      console.log(error);
    }
  };
}

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online.`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("hey");
  }

  if (interaction.commandName === "connect") {
    console.log(a + b);
    console.log("working0");
    connect();
    console.log("this is working");
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (
    (message.content === "hello") |
    (message.content === "hey") |
    (message.content === "hi")
  ) {
    message.reply("hello");
  }
});

client.on("message", (message) => {
  if (!message.content.startsWith("!ping")) return;
  pingCommand(message);
});

function pingCommand(message) {
  message.channel.send("Pong!");
}

client.login(process.env.DISCORD_KEY);

const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();
const { ethers } = require("ethers");

let a = 3;
let b = 3;

async function connect() {
  async () => {};
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

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("hey");
  }

  if (interaction.commandName === "connect") {
    interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );

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

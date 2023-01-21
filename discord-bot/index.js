const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();

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

client.login(process.env.DISCORD_KEY);

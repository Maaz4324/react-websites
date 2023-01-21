const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = [
  {
    name: "hey",
    description: "Replies with hi",
  },
  {
    name: "connect",
    description: "Connect to your metamask wallet",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_KEY);
(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("Slash commands registered");
  } catch (error) {
    console.log("there was an error " + error);
  }
})();

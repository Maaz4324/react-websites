const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = [
  {
    name: "hey",
    description: "Replies with hi",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTA2NjM0MDQxMTE2MzAzNzcwNg.GqsgL2.CF9tkULOlFSgMZwFfep1o9ZjkZlPDB0_YkbGSg"
);
(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        "1066340411163037706",
        "1066338460648099921"
      ),
      { body: commands }
    );
    console.log("Slash commands registered");
  } catch (error) {
    console.log("there was an error " + error);
  }
})();

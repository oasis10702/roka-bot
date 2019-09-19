import Discord from "discord.js";

import Handler from "./handler";

const client = new Discord.Client();
const BOT_TOKEN = "NjIxOTQwNTM0MjA2MDA1Mjcw.XYMT0g.mc1YfoKATNQjZMqijBdYNjKr07k";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.author.bot) {
    return null;
  }
  if (message.content === "ping") {
    return message.reply("pong");
  } else {
    return Handler({ message, client });
  }
});

client.login(process.env.BOT_TOKEN);

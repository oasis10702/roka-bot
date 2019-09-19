const Discord = require("discord.js");

const client = new Discord.Client();
const BOT_TOKEN = "NjIxOTQwNTM0MjA2MDA1Mjcw.XYMT0g.mc1YfoKATNQjZMqijBdYNjKr07k";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong");
  }
  if (message.content === "熊熊") {
    message.reply("囉卡熊要抱抱！");
  }
});

client.login(process.env.BOT_TOKEN);

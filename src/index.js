const Discord = require("discord.js");

const client = new Discord.Client();
const BOT_TOKEN = "NjIxOTQwNTM0MjA2MDA1Mjcw.XYL6pw.i7LQr_QJ1ZFSMZRNarNXldtBYUM";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.login(BOT_TOKEN);

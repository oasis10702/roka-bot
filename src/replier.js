const MessageReply = (msg, text) => msg.reply(text);

const MessageChannelSend = (msg, text) => msg.channel.send(text);

export const HugReplier = message => {
    MessageReply(message, '囉卡醬要抱抱！');
};

export const ConfuseReplier = message => {
    MessageChannelSend(message, '囉卡聽不懂喵！');
}
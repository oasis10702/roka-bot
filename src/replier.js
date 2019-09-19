const MessageReply = (msg, text) => msg.reply(text);

export const HugReplier = message => {
    MessageReply(message, '囉卡醬要抱抱！');
};

export const ConfuseReplier = message => {
    MessageReply(message, '囉卡聽不懂喵！');
}
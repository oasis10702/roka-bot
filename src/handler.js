import * as replies from "./replier";

const Handler = ({ message, client }) => {
  return KeywordHandler(message, client);
};

const KeywordHandler = (message, client) => {
  switch (message.content) {
    case "熊熊":
      replies.HugReplier(message);
      break;
    case "睡覺":
      replies.HelpTunkInReplier(message);
    default:
      if (message.content.indexOf(client.user) !== -1) {
        replies.ConfuseReplier(message);
      }
      break;
  }
};

export default Handler;

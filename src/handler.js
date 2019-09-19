import * as replies from "./replier";

const Handler = ({ message, client }) => {
  return KeywordHandler(message);
};

const KeywordHandler = message => {
  switch (message.content) {
    case "熊熊":
      replies.HugReplier(message);
      break;
    default:
      if (message.content.indexOf(client.user)) {
        replies.ConfuseReplier(message);
      }
      break;
  }
};

export default Handler;

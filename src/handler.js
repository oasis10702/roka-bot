import * as replies from "./replier";

const Handler = message => {
  switch (message.content) {
    case "熊熊":
      replies.HugReplier(message);
      break;
    default:
      replies.ConfuseReplier(message);
      break;
  }
};

export default Handler;

import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
  organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async (input) => {
  await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    })
    .then((res) => {
      console.log(res.data.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((e) => {
      console.log(e);
    });
});

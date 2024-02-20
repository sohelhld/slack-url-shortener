const express = require("express");
const { connected } = require("./db");
const { shortRouter } = require("./router/shortener.router");
const { App } = require("@slack/bolt");

const appApi = express();
require("dotenv").config();
const axios = require("axios");

appApi.use(express.json());

appApi.get("/", (req, res) => {
    res.send("ok");
});

appApi.use("/short", shortRouter);

appApi.listen(process.env.PORT, async (req, res) => {
    try {
        await connected;
        console.log("Connected with db");
    } catch (error) {
        console.log(error.message);
    }
    console.log("server is connected on port 8080");
});

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
});

// app.command("/hello", async ({ command, ack, say }) => {
//     await ack();
//     await say(`hello, <@${command.user_id}>`);
// });

app.message("hi", async ({ message, say }) => {
    // The bot will respond when it receives a message containing "hello"
    try {
        console.log(message);
        await say(`Hi there, <@${message.user}>!`);
    } catch (error) {
        console.log({ error: error });
    }
});

app.message(async ({ message, say }) => {
    if (message.text && message.text.startsWith("<https://")) {
        try {
            const response = await axios.post(
                "https://slack-shortener.onrender.com/short/shorten",

                {
                    url: removeAngleBrackets(message.text),
                }
            );

            await say(`Shortened URL: ${response.data.shortURL}`);
        } catch (error) {
            console.error(error);
            await say("Failed to shorten URL");
        }
    }
});

function removeAngleBrackets(str) {
    if (str.startsWith("<") && str.endsWith(">")) {
        return str.slice(1, -1);
    } else {
        return str;
    }
}

(async () => {
    // Start the app
    await app.start(3000);

    console.log("⚡️ Bolt app is running!");
})();

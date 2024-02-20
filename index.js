const express = require("express");
const { connected } = require("./db");
const { shortRouter } = require("./router/shortener.router");

const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("ok");
});

app.use("/short", shortRouter);

app.listen(process.env.PORT, async (req, res) => {
    try {
        await connected;
        console.log("Connected with db");
    } catch (error) {
        console.log(error.message);
    }
    console.log("server is connected on port 8080");
});

// var SlackBot = require("slackbots");

// // create a bot
// var bot = new SlackBot({
//     token: "xoxb-6663680980083-6657594018550-GLV5q4DZ2eCnyROhruiGl4Ze", // Add a bot https://my.slack.com/services/new/bot and put the token
//     name: "apishortner",
// });

// bot.on("start", function () {
//     // more information about additional params https://api.slack.com/methods/chat.postMessage
//     var params = {
//         icon_emoji: ":cat:",
//     };

//     // define channel, where bot exist. You can adjust it there https://my.slack.com/services
//     bot.postMessageToChannel("general", "meow!", params);
// });

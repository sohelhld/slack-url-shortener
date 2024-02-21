# Slack URL Shortener

This project is a simple Slack bot that allows users to shorten URLs directly within Slack conversations.

## Deploy link

      [https://slack-url-shortener-zkwz.onrender.com](https://)

## Features

-   Accepts long URLs pasted into Slack messages.
-   Shortens the URLs and provides the shortened version in the same Slack channel.
-   Built using the Slack Bolt framework and Axios for API requests.
-   Automatically shortens long URLs posted in the general channel.

## Installation

To install and run the Slack URL Shortener bot, follow these steps:

1. Clone the repository to your local machine:

git clone [<repository_url>](https://github.com/sohelhld/slack-url-shortener.git)

2. Install dependencies:

**npm install**

3. Set up environment variables:

    - `SLACK_BOT_TOKEN`: Your Slack bot token
    - `SLACK_SIGNING_SECRET`: Your Slack app signing secret
    - `SLACK_APP_TOKEN`: Your Slack app token
    - `SHORTENER_API_URL`: URL of the URL shortening API

4. Start the bot:

**npm run server**

## Usage

# To use the Slack URL Shortener bot, simply paste a long URL into any Slack channel where the bot is present. The bot will automatically detect the URL and respond with the shortened version.

# Additionally, if a long URL is posted in the general channel, the bot will automatically respond with the shortened version.

## Dependencies

-   [@slack/bolt](https://www.npmjs.com/package/@slack/bolt): Slack app framework for Node.js
-   [axios](https://www.npmjs.com/package/axios): HTTP client for making API requests

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

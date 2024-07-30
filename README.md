# Realtime Input/Output Compilers
**by [@PanditSiddharth](https://telegram.me/PanditSiddharth)**

**Version:** 4.0.0  
**VersionNo:** 24

**GitHub:** [IOCompiler Repository](https://github.com/Panditsiddharth/compilers)  
**NPM:** [IOCompiler on NPM](https://npmjs.com/Panditsiddharth/iocompiler)

For any other help:  
- **Support Group:** [LogicB Support](https://telegram.me/LogicB_support)  
- **Updates:** [Logicbots](https://telegram.me/Logicbots)  
- **Bot Owner:** [@PanditSiddharth](https://telegram.me/PanditSiddharth)  

**Testing Group:** [IO_Coding](https://telegram.me/IO_Coding)  
Contribute to the project or create your own bot—it's open source!

### ⚠️ Please run only in a secure environment
Using your bot, users can potentially harm your system. Utilize Docker or any secure environment, or specify allowed users via Telegram ID.

---

## How to Setup

### Step 1: Create Your Bot on Telegram

1. Go to [@BotFather](https://t.me/BotFather) on Telegram.
2. Send the command `/newbot` to create a new bot.
3. Follow the instructions to name your bot and create a username.

   You will receive a bot token and a bot link after completing these steps.

### Step 2: Setup IOCompiler

#### Pre-requisites

- **Node.js** installed on your system.
- Optional: Install additional languages like C/C++, Python, Java, etc.

#### Installation

##### For Windows, Linux (Ubuntu, Red Hat, etc.), macOS, and Android (Termux):

1. Open PowerShell, Command Prompt, or your terminal.
2. Create and navigate to a new directory for your project:
    ```sh
    mkdir compiler
    cd compiler
    ```

3. Initialize a new Node.js project and install IOCompiler:
    ```sh
    npm init -y
    npm install iocompiler
    ```

4. Create an `index.js` file and paste the following code. Replace `process.env.BOT_TOKEN` with your bot token from BotFather, and `process.env.TELEGRAM_ID` with your Telegram ID:
    ```js
    const { compiler } = require('iocompiler');

    // Specify allowed users; without this, all users can access your bot
    const { bot } = compiler(process.env.BOT_TOKEN, { allowed: [1791106582, process.env.TELEGRAM_ID] });

    // Launching telegraf bot in polling mode
    bot.launch({ dropPendingUpdates: true });
    ```

5. Run the project:
    ```sh
    node index.js
    ```

That's it! You have successfully created your Telegram bot using IOCompiler.

---

### Useful Commands

- **See all commands:** `/help`
- **Check if bot is running:** `/ping`
- **See current version and features of the bot:** `/version`

For any queries, join our support groups:
- [LogicB Support](https://telegram.me/logicb_support)
- [Logicbots](https://telegram.me/logicbots)

---

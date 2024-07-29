"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hlp {
    constructor() {
        this.readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async replyWithDeleteTime(ctx, mss, tim = 10) {
        return await ctx.reply(mss).then(async (mi) => {
            await this.sleep(tim * 1000);
            return await ctx.deleteMessage(mi.message_id).catch((err) => { });
        })
            .catch((err) => { });
    }
    input(question) {
        return new Promise((resolve) => {
            this.readline.question(question, resolve);
        });
    }
}
exports.default = Hlp;

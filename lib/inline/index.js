"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineStarter = inlineStarter;
function inlineStarter(bot) {
    bot.on("chosen_inline_result", ctx => {
        // console.log(ctx.inlineQuery)
        console.log(ctx.chosenInlineResult);
    });
    bot.on("inline_query", ctx => {
        console.log("Got inline query");
        ctx.answerInlineQuery([{
                type: "article",
                id: "thumbnail",
                title: "title",
                description: "title",
                // thumb_url: thumbnail,
                input_message_content: {
                    message_text: "logl",
                },
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Tutorial', url: "https://t.me/logicBots/83" },
                            { text: 'Dev Support', url: 'https://t.me/LogicB_support' }
                        ],
                    ],
                }
            }]);
    });
}

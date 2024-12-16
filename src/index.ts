import bt from './bot';
import Hlp from './helpers';
import conf from './config'
import real from "./help/real"
import { scenes } from './scenes';
// 2 global dependencies
import { Scenes, session, Telegraf } from "telegraf";
import * as tp from "./interfaces"
import { inlineStarter } from './inline';
import { modeCheck } from './mode-check';

type IOConfig = tp.Config;
export { IOConfig }
// Helper class object where sleep function etc listed
let h = new Hlp()

export function compiler(telegrafBotByUser: tp.TelegramBotToken | Telegraf<Scenes.SceneContext>) {
  modeCheck(conf.mode as tp.Mode, conf.allowed as string[])

  let bot: Telegraf<Scenes.SceneContext> = typeof telegrafBotByUser == "string" ?
    new Telegraf<Scenes.SceneContext>(telegrafBotByUser, (conf.telegram && typeof conf.telegram == "object") ? conf.telegram : {})
    : telegrafBotByUser;

  // regestering all scenes
  let stage = new Scenes.Stage<Scenes.SceneContext>(scenes, { ttl: conf.ttl });

  // passing bot instance in bot.ts file by call those function
  inlineStarter(bot as any)
  bt(bot);
  real(bot as any);

  // Some global telegraf uses for help
  bot.use(session());
  bot.use(stage.middleware());

  // Main Program starts from here it listens /js /py all commands and codes 
  bot.hears(new RegExp(`^${conf?.startSymbol! + conf.commands?.join("|")}`, "i"),
    async (ctx: any, next: any) => {
      try {

        if (["private", "docker-private"].includes(conf.mode as keyof typeof conf.allowed)
          && !conf.allowed?.includes(+ctx.from.id as never))
          return ctx.reply("You are not allowed ask " + conf.group)

        let groupUser = await ctx.getChatMember(ctx.botInfo.id)
        if (!groupUser.can_delete_messages) {
          if ((ctx.chat.id + "").startsWith("-100"))
            return ctx.reply('I must be admin with delete message permission')
        }

        const getCommand = () =>
          ctx?.message?.text?.match(new RegExp(`^${conf.startSymbol}([a-zA-Z]{2,4})`, "i"));
        ctx.scene.enter(getCommand()[1])

      } catch (error: any) {
        ctx.reply(error.message)
        console.error("Error in index.ts file starting problem", error.message)
      }
    })

  return { bot, conf }
}

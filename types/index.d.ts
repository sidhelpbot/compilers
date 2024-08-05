import { Scenes, Telegraf } from "telegraf";
import * as tp from "./interfaces";
export declare function compiler(telegrafBotByUser: tp.TelegramBotToken | Telegraf<Scenes.SceneContext>, conf?: tp.Config): {
    bot: Telegraf<Scenes.SceneContext<Scenes.SceneSessionData>>;
    config: tp.Config;
};
//# sourceMappingURL=index.d.ts.map
import { Context, Scenes } from "telegraf";
import { Chat, Message, Update, User } from "telegraf/types";

export interface CustomCtx extends Scenes.SceneContext {
  from: User
   & {
    id: number;
    first_name: string;
    last_name: string;
    username?: string;
    language_code?: string;
  };
  chat:  Chat.SupergroupChat ;
  message: (Update.New & Update.NonChannel & Message);
  scene: Scenes.SceneContextScene<Scenes.SceneContext<Scenes.SceneSessionData>, Scenes.SceneSessionData> ;
  ["string"]: string
}
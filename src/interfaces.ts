import { SpawnOptions } from "child_process";
import { Scenes, Telegraf } from "telegraf";

export type TelegramBotToken = "string"
// Don't change these types
export type Chatid = string | number
export type UserId = string | number
export type Username = string;
export type Mode = "private" | "docker-private" | "public" | "api-mode";

export interface Config {
  telegram?: Partial<Telegraf.Options<Scenes.SceneContext<Scenes.SceneSessionData>>>;
  mode?: Mode;
  codeLogs?: Chatid;
  chatLogs?: Chatid;
  errorLogs?: UserId;
  ttl: number;
  ownerId?: UserId;
  admins?: UserId[];
  version?: string;
  startSymbol?: string;
  owner?: string;
  group?: Username;
  channel?: Username;
  token?: string;
  python?: string;
  java?: string;
  javac?: string;
  go?: string;
  node?: string;
  config?: Config;
  spawnOptions?: SpawnOptions;
  configure?: (cnf: Config) => void;
  allowed?: string[] | number[];
  exes?: any;
  end?: Function | undefined;
}

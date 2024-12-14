import bt from './bot';
import Hlp from './helpers';
import config from './config'
import real from "./help/real"
import pjson from "../package.json"

let which = require("which")
let exes = {
  gcc: which.sync('gcc', { nothrow: true }),
  cpp: which.sync('g++', { nothrow: true }),
  node: which.sync('node', { nothrow: true }),
  go: which.sync('go', { nothrow: true }),
  java: which.sync('java', { nothrow: true }),
  javac: which.sync('javac', { nothrow: true }),
  python: which.sync('python', { nothrow: true }),
  python3: which.sync('python3', { nothrow: true }),
  sh: which.sync('bash', { nothrow: true }),
  ps: which.sync('powershell.exe', { nothrow: true }),
  rs: which.sync('rustc', { nothrow: true }),
}
// 2 global dependencies
import { Scenes, session, Telegraf } from "telegraf";
import starter from './starter'
import * as tp from "./interfaces"
import { inlineStarter } from './inline';
import { modeCheck } from './mode-check';

let objj: any = {};
// this will run web server and always make it alive

// Helper class object where sleep function etc listed
let h = new Hlp()

// global object for all updates
let func: any = {};

// Helper function which replace bot username if exists in command
function cmdd(ctx: any) {
  if (ctx.message && ctx.message.text) {
    ctx.message.text = ctx.message.text.replace(new RegExp("^\\" + config.startSymbol + "[a-zA-Z0-9]{2,9}@" + ctx.botInfo.username, 'i'),
      (match: any) => match.replace("@" + ctx.botInfo.username, ""))
  }
}

export function compiler(telegrafBotByUser: tp.TelegramBotToken | Telegraf<Scenes.SceneContext>, conf: tp.Config = {} as tp.Config) {

  // Some default configurations
  conf.version = pjson.version;
  conf.versionNo = 18
  if (!conf.ttl)
    conf.ttl = 60;

  if (!conf.startSymbol)
    conf.startSymbol = "/"
  if (!conf.exes)
    if (!conf.group) {
      conf.exes = exes;
    }
  conf.group = "@Logicb_support";
  if (!conf.channel)
    conf.channel = "@LogicBots";
  if (!conf.mode)
    conf.mode = "private";
  if (!conf.allowed)
    conf.allowed = [] as string[];

  (config as any).configure(conf)



  // config.config = conf;

  // createEnvironment()
  // All scenes 
  let pyScene = new Scenes.BaseScene<Scenes.SceneContext>("py");
  pyScene.enter(async (ctx: any) => {
    cmdd(ctx);
    if (await startcheck(ctx, 'py python'))
      return;
    await starter(bot, ctx, conf, { cmp: "py", exe: exes.python || exes.python3 })
  });

  pyScene.on("message", async (ctx: any) => {
    cmdd(ctx);
    if (await startcheck(ctx, 'py python')) return;
    await starter(bot, ctx, conf, { cmp: "py", exe: exes.python || exes.python3 })
  });

  let rsScene = new Scenes.BaseScene<Scenes.SceneContext>("rs");
  rsScene.enter(async (ctx: any) => {
    cmdd(ctx);
    if (await startcheck(ctx, 'rs rust'))
      return;
    await starter(bot, ctx, conf, { cmp: "rs", exe: exes.rs })
  });

  rsScene.on("message", async (ctx: any) => {
    cmdd(ctx);
    if (await startcheck(ctx, 'rs rust')) return;
    await starter(bot, ctx, conf, { cmp: "rs", exe: exes.rs })
  });

  let cppScene = new Scenes.BaseScene<Scenes.SceneContext>("cpp");

  cppScene.enter(async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'cpp cplus')) return;
    await starter(bot, ctx, conf, { cmp: "cpp", exe: exes.cpp })
  });

  cppScene.on("message", async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'cpp cplus')) return;
    await starter(bot, ctx, conf, { cmp: "cpp", exe: exes.cpp })
  });

  let cScene = new Scenes.BaseScene<Scenes.SceneContext>("code");
  cScene.enter(async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'cc code')) return;
    await starter(bot, ctx, conf, { cmp: "c", exe: exes.gcc })
  });

  cScene.on("message", async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'cc code')) return;
    await starter(bot, ctx, conf, { cmp: "c", exe: exes.gcc })
  });

  let jvScene = new Scenes.BaseScene<Scenes.SceneContext>("jv");
  jvScene.enter(async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'jv java')) return;
    await starter(bot, ctx, conf, { cmp: "jv", exe: exes.java })
  });

  jvScene.on("message", async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'jv java')) return;
    await starter(bot, ctx, conf, { cmp: "jv", exe: exes.java })
  });

  let jsScene = new Scenes.BaseScene<Scenes.SceneContext>("js");
  jsScene.enter(async (ctx: any) => {
    cmdd(ctx)

    if (await startcheck(ctx, 'js node sql')) return;

    await starter(bot, ctx, conf, { cmp: "js", exe: exes.node })
  });

  jsScene.on("message", async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'js node sql')) return;
    await starter(bot, ctx, conf, { cmp: "js", exe: exes.node })
  });

  let tsScene = new Scenes.BaseScene<Scenes.SceneContext>("ts");
  tsScene.enter(async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'ts type')) return;
    await starter(bot, ctx, conf, { cmp: "ts", exe: exes.node })
  });

  tsScene.on("message", async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'ts type')) return;
    await starter(bot, ctx, conf, { cmp: "ts", exe: exes.node })
  });

  let goScene = new Scenes.BaseScene<Scenes.SceneContext>("go");
  goScene.enter(async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'go')) return;
    await starter(bot, ctx, conf, { cmp: "go", exe: exes.go })
  });

  goScene.on("message", async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'go')) return;
    await starter(bot, ctx, conf, { cmp: "go", exe: exes.go })
  });

  let shScene = new Scenes.BaseScene<Scenes.SceneContext>("sh");
  shScene.enter(async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'sh')) return;
    await starter(bot, ctx, conf, { cmp: "sh", exe: exes.sh })
  });

  shScene.on("message", async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'sh')) return;
    await starter(bot, ctx, conf, { cmp: "sh", exe: exes.sh })
  });

  let psScene = new Scenes.BaseScene<Scenes.SceneContext>("ps");
  psScene.enter(async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'ps')) return;
    await starter(bot, ctx, conf, { cmp: "ps", exe: exes.ps })
  });

  psScene.on("message", async (ctx: any) => {
    cmdd(ctx)
    if (await startcheck(ctx, 'ps')) return;
    await starter(bot, ctx, conf, { cmp: "ps", exe: exes.ps })
  });
  // making instance of Telegraf class

  let bot: Telegraf<Scenes.SceneContext> = typeof telegrafBotByUser == "string" ?
    new Telegraf<Scenes.SceneContext>(telegrafBotByUser, (conf.telegram && typeof conf.telegram == "object") ? conf.telegram : {})
    : telegrafBotByUser;


  // regestering all scenes
  let stage = new Scenes.Stage<Scenes.SceneContext>([cScene, pyScene, jsScene, rsScene, cppScene, jvScene, goScene, tsScene, shScene, psScene], { ttl: config.ttl });

  // passing bot instance in bot.ts file by call those function
  inlineStarter(bot as any)
  bt(bot);
  real(bot as any);

  // Some global telegraf uses for help
  bot.use(session());
  bot.use(stage.middleware());

  // Main Program starts from here it listens /js /py all commands and codes 
  bot.hears(new RegExp("^\\" + config.startSymbol + "(code|start|py|python|ts|type|js|node|cc|cpp|cplus|sql|go|jv|java|c\\+\\+|sh|ps|rs|rust)|\\/start", "i"), async (ctx: any, next: any) => {
    try {
      modeCheck(conf.mode as tp.Mode, conf.allowed as string[])
      if (conf.allowed && (conf.mode != "public")) {
        let allowedStr = conf.allowed.join(" ");
        if (!allowedStr.match(ctx.from.id))
          return ctx.reply("You are not allowed ask @LogicB_support")
      }

      let compiler: any = ctx.message.text + "";

      let memb = await ctx.getChatMember(ctx.botInfo.id)
      if (!memb.can_delete_messages) {
        if ((ctx.chat.id + "").startsWith("-100"))
          return ctx.reply('I must be admin with delete message permission')
      }

      // function cmp(a: string) {
      //   return (new RegExp("^\\" + config.startSymbol + "(" + a + ")", "i")).test(compiler)
      // }

      function cmp(a: string) {
        const regex = new RegExp(`^${config.startSymbol}(${a})`, "i");
        return regex.test(compiler);
      }

      if (compiler.startsWith("/start") && objj.hasOwnProperty("" + ctx.message.from.id)) {
        let kkk = objj["" + ctx.message.from.id]
        ctx.message.text = kkk.text;
        return ctx.scene.enter(kkk.cmp)
      }
      const rplc = (fromR: String, toR: String) => {
        if (compiler.startsWith(config?.startSymbol as any + fromR)) {
          ctx.message.text = compiler.replace(new RegExp("^\\" + config.startSymbol + fromR, "i"), config.startSymbol as any + toR)
        }
      }

      const cmds = ["go", "ps", "rs", "sh", "ts", "py", "cc", "js", "jv", "sql", "cpp"];
      for (const cmd of cmds) {
        if (cmp(cmd)) {
          ctx.scene.enter(cmd)
        }
      }
      // next();
    } catch (error: any) {
      console.log(error)
      ctx.reply(error.message)
      console.error("Error in index.ts file starting problem")
    }
  })

  // This function checks that if any compiler command change then it changes session; Example : js to py
  async function startcheck(ctx: any, y: any, json: any = {}) {
    try {

      if (!ctx.message.text.startsWith(config.startSymbol))
        return false

      function cmp(a: string) {
        return (new RegExp("^\\" + config.startSymbol + a, "i")).test(ctx.message.text)
      }

      let cmd = ctx.message.text.match(new RegExp("^\\" + config.startSymbol + "[a-zA-Z0-9]{2,9}", 'i'))
      if (!cmd) return false;

      let cst = cmd[0].replace(config.startSymbol, "")
      cst = cst.toLowerCase()
      if (y.includes(cst)) {
        return false
      }

      if (("py python").includes(cst)) {
        ctx.scene.enter("py")
        return true
      }
      else if (("cc code").includes(cst)) {
        ctx.scene.enter("code")
        return true
      }
      else if (("js node sql").includes(cst)) {
        ctx.scene.enter("js")
        return true
      }
      else if (("ts type").includes(cst)) {
        ctx.reply("Excecuting typescript code..")
          .then(async (m: any) => { await h.sleep(3000); return m.message_id })
          .then((m: any) => { ctx.deleteMessage(m) })
          .catch((err: any) => { })

        await h.sleep(300)
        ctx.scene.enter("ts")
        return true
      }
      else if (("cpp cplus").includes(cst)) {
        ctx.scene.enter("cpp")
        return true
      }
      else if (("jv java").includes(cst)) {
        ctx.scene.enter("jv")
        return true
      }
      else if (("go").includes(cst)) {
        ctx.scene.enter("go")
        return true
      }
      else if (("sh").includes(cst)) {
        ctx.scene.enter("sh")
        return true
      }
      else if (("ps").includes(cst)) {
        ctx.scene.enter("ps")
        return true
      }

      return false
    } catch (error) {
      return false
    }
  }

  return { bot, config }
}

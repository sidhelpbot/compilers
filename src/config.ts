import * as tp from "./interfaces";
import pjson from "../package.json"
function safeRequire(configFile: string) {
  try {
    return require(`${process.cwd()}/${configFile}`);
  } catch (error) {
      return undefined; // Return undefined if the module/file is not found
  }
}

const userConfig = safeRequire("iocompiler") || safeRequire("main") || safeRequire("index"); // Load user-defined config file if it exists

let config: tp.Config = { ttl: 60, commands:[ "py", "js", "cc", "cpp", "jv", "ts", "go", "rs", "sh"]};

if(userConfig){
  config = {...config,...userConfig?.config}
}
  // Some default configurations
  config.version = pjson.version;
  if (!config.ttl)
    config.ttl = 60;

  if (!config.startSymbol)
    config.startSymbol = "/"
  
  config.group = "@Logicb_support";

  if (!config.channel)
    config.channel = "@LogicBots";

  if (!config.mode)
    config.mode = "private";

  if (!config.allowed)
    config.allowed = [] as string[];
  config.commands = [ "py", "js", "cc", "cpp", "jv", "ts", "go", "rs", "sh"]
export default config;






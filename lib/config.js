"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = __importDefault(require("../package.json"));
function safeRequire(configFile) {
    try {
        return require(`${process.cwd()}/${configFile}`);
    }
    catch (error) {
        return undefined; // Return undefined if the module/file is not found
    }
}
const userConfig = safeRequire("iocompiler") || safeRequire("main") || safeRequire("index"); // Load user-defined config file if it exists
let config = { ttl: 60, commands: ["py", "js", "cc", "cpp", "jv", "ts", "go", "rs", "sh"] };
if (userConfig) {
    config = { ...config, ...userConfig === null || userConfig === void 0 ? void 0 : userConfig.config };
}
// Some default configurations
config.version = package_json_1.default.version;
if (!config.ttl)
    config.ttl = 60;
if (!config.startSymbol)
    config.startSymbol = "/";
config.group = "@Logicb_support";
if (!config.channel)
    config.channel = "@LogicBots";
if (!config.mode)
    config.mode = "public";
if (!config.allowed)
    config.allowed = [];
config.commands = ["py", "js", "cc", "cpp", "jv", "ts", "go", "rs", "sh"];
exports.default = config;

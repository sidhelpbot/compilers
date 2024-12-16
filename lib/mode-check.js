"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modeCheck = void 0;
let which = require("which");
const modeCheck = (mode, array = []) => {
    if (mode === "private" && array.length == 0) {
        throw new Error(`Private mode is needs user's telegram id
            Add option {allowed: ['your tg ids']} `);
    }
    if (mode === "public" && array.length != 0) {
        throw new Error("Public mode doesn't needed user's telegram id\nRemove option {allowed: ['']} or use it privately by making {mode: 'private'");
    }
    if (mode == "api-mode" && array.length != 0) {
        throw new Error("Api mode is not supported now please use private or public or docker-private modes");
    }
    if (mode == "docker-private" || mode == "public") {
        if (!which.sync('docker', { nothrow: true }))
            throw new Error("Docker is not installed on this system. Please install Docker first or use private mode");
    }
};
exports.modeCheck = modeCheck;

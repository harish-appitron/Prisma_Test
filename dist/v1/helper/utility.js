"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratePassword = exports.getTimeAndDate = exports.dateWithFormat = void 0;
require("moment-timezone");
const moment_1 = __importDefault(require("moment"));
require("dotenv/config");
const dateWithFormat = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear());
    const goodDate = (0, moment_1.default)(date).tz('Asia/Kolkata').format("YYYY-MM-DD HH:mm:ss");
    return goodDate;
};
exports.dateWithFormat = dateWithFormat;
const getTimeAndDate = async () => {
    var m = moment_1.default.tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm');
    const str = (m).toString().split(" ");
    return [str[0], str[1]];
};
exports.getTimeAndDate = getTimeAndDate;
const GeneratePassword = async () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    console.log(code, "code");
    return code;
};
exports.GeneratePassword = GeneratePassword;
//# sourceMappingURL=utility.js.map
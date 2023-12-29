"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeAndDate = void 0;
const moment_1 = __importDefault(require("moment"));
require("moment-timezone");
const getTimeAndDate = () => __awaiter(void 0, void 0, void 0, function* () {
    var m = moment_1.default.tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm');
    const str = (m).toString().split(" ");
    return [str[0], str[1]];
});
exports.getTimeAndDate = getTimeAndDate;

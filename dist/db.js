"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = mysql2_1.default.createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
});
pool.getConnection((err, connection) => {
    if (err) {
        console.log(err);
        console.log("Error connecting to Db");
        return;
    }
    console.log(`Db server is running`);
    connection.release();
});
exports.default = pool.promise();

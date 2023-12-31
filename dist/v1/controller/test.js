"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.allUser = exports.GetUser = exports.UpdateUser = exports.createUser = void 0;
const db_1 = __importDefault(require("../../db"));
const apiResponse = __importStar(require("../helper/apiResponse"));
const createUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const finduser = await db_1.default.user1.findUnique({
            where: {
                email: email,
            }
        });
        if (finduser) {
            return apiResponse.errorMessage(res, 400, "email allReady exist");
        }
        const newUser = await db_1.default.user1.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        });
        console.log("newUser");
        return res.json({ status: true, data: newUser, msg: "User created." });
    }
    catch (error) {
        console.log(error, "error");
        return apiResponse.errorMessage(res, 400, "Something went wrong");
    }
};
exports.createUser = createUser;
const UpdateUser = async (req, res) => {
    try {
        const userId = req.query.id;
        console.log(userId, "userId");
        const { name, email, password } = req.body;
        await db_1.default.user1.update({
            where: {
                id: Number(userId)
            },
            data: {
                name: name,
                email: email,
                password: password
            },
        });
        return res.json({ status: 200, message: "User updated successfully" });
    }
    catch (error) {
        console.log(error, "error");
        return apiResponse.errorMessage(res, 400, "Something went wrong");
    }
};
exports.UpdateUser = UpdateUser;
const GetUser = async (req, res) => {
    try {
        const userId = req.query.id;
        const user = await db_1.default.user1.findFirst({
            where: {
                id: Number(userId)
            }
        });
        return res.json({ status: 200, data: user, message: " all user " });
    }
    catch (error) {
        console.log(error, "error");
        return apiResponse.errorMessage(res, 400, "Something went wrong");
    }
};
exports.GetUser = GetUser;
const allUser = async (req, res) => {
    try {
        const user = await db_1.default.user1.findMany({});
        return res.json({ status: 200, data: user });
    }
    catch (error) {
        console.log(error, "error");
        return apiResponse.errorMessage(res, 400, "Something went wrong");
    }
};
exports.allUser = allUser;
const deleteUser = async (req, res) => {
    const userId = req.query.id;
    await db_1.default.user1.delete({
        where: {
            id: Number(userId),
        },
    });
    return res.json({ status: 200, msg: "User deleted successfully" });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=Test.js.map
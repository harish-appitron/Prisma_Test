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
exports.deleteUser = exports.allUser = exports.GetUser = exports.UpdatePost = exports.createPost = void 0;
const db_1 = __importDefault(require("../../db"));
const apiResponse = __importStar(require("../helper/apiResponse"));
const createPost = async (req, res) => {
    try {
        const { user_id, title, description } = req.body;
        const newPost = await db_1.default.post.create({
            data: {
                user_id: user_id,
                title: title,
                description: description
            },
        });
        console.log('newPost', newPost);
        return res.json({ status: true, Data: [], msg: 'Post created.' });
    }
    catch (error) {
        console.error(error, 'error');
        return apiResponse.errorMessage(res, 400, 'Something went wrong');
    }
};
exports.createPost = createPost;
const UpdatePost = async (req, res) => {
    try {
        const userId = req.query.id;
        console.log(userId, "userId");
        const { title, description } = req.body;
        await db_1.default.post.update({
            where: {
                id: Number(userId)
            },
            data: {
                title: title,
                description: description
            },
        });
        return res.json({ status: 200, message: "User updated successfully" });
    }
    catch (error) {
        console.log(error, "error");
        return apiResponse.errorMessage(res, 400, "Something went wrong");
    }
};
exports.UpdatePost = UpdatePost;
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
//# sourceMappingURL=Post.js.map
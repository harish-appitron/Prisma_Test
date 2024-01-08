"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_1 = __importDefault(require("../src/v1/routes/test"));
const postroute_1 = __importDefault(require("../src/v1/routes/postroute"));
const router = (0, express_1.Router)();
router.use("/v1", test_1.default);
router.use("/v2", postroute_1.default);
exports.default = router;
//# sourceMappingURL=api.route.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = __importDefault(require("./db"));
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false, limit: '1gb' }));
(0, app_1.default)(app);
db_1.default;
app.listen(port, () => {
    console.log(`Express server listening on ${port} `);
});
exports.default = app;
//# sourceMappingURL=index.js.map
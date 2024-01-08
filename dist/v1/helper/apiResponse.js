"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.somethingWentWrongMessage = exports.errorMessage = exports.successResponse = void 0;
const successResponse = async (res, msg, data) => {
    var resData = {
        status: true,
        data: data,
        message: msg,
    };
    return res.status(200).json(resData);
};
exports.successResponse = successResponse;
const errorMessage = async (res, statusCode, msg) => {
    return res.status(statusCode).json({
        status: false,
        data: null,
        message: msg
    });
};
exports.errorMessage = errorMessage;
const somethingWentWrongMessage = async (res) => {
    return res.status(400).json({
        status: false,
        data: null,
        message: "Something went wrong"
    });
};
exports.somethingWentWrongMessage = somethingWentWrongMessage;
//# sourceMappingURL=apiResponse.js.map
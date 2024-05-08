"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const registerSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        unique: true,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true });
const UserRegisterModel = mongoose_1.default.model('UserRegister', registerSchema);
exports.default = UserRegisterModel;
//# sourceMappingURL=UserRegisterModel.js.map
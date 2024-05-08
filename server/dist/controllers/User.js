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
exports.UserRegister = void 0;
const UserRegisterModel_1 = __importDefault(require("../models/UserRegisterModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const existingEmail = yield UserRegisterModel_1.default.findOne({ email });
        if (existingEmail) {
            return res.status(409).json({
                success: false, message: 'This Email Already Exists'
            });
        }
        const existingUsername = yield UserRegisterModel_1.default.findOne({ username });
        if (existingUsername) {
            return res.status(409).json({
                success: false, message: 'Username is Already Taken'
            });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const User = new UserRegisterModel_1.default({ username, email, password: hashedPassword });
        yield User.save();
        return res.status(201).json({
            success: true, message: 'User Register Successfully', User
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false, message: "Error while User Register", error
        });
    }
});
exports.UserRegister = UserRegister;
//# sourceMappingURL=User.js.map
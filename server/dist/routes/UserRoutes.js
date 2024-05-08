"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../controllers/User");
const router = (0, express_1.default)();
router.post('/register', User_1.UserRegister);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map
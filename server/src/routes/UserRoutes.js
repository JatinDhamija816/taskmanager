import express from "express";
import { UserRegister } from "../controllers/User.js";

const router = express()

router.post('/register', UserRegister)

export default router
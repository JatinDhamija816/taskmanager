import express from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoute from "./routes/UserRoutes.js";

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/', userRoute)
export default app

import UserRegisterModel from "../models/UserRegisterModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const UserRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const existingEmail = await UserRegisterModel.findOne({ email })
        if (existingEmail) {
            return res.status(409).json({
                success: false, message: 'This Email Already Exists'
            })
        }
        const existingUsername = await UserRegisterModel.findOne({ username })
        if (existingUsername) {
            return res.status(409).json({
                success: false, message: 'Username is Already Taken'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const User = new UserRegisterModel({ username, email, password: hashedPassword })
        await User.save()
        return res.status(201).json({
            success: true, message: 'User Register Successfully', User
        })
    } catch (error) {
        return res.status(500).json({
            success: false, message: "Error while User Register", error
        })
    }
}
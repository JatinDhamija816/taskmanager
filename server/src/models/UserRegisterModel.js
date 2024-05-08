import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
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
}, { timestamps: true })

const UserRegisterModel = mongoose.model('UserRegister', registerSchema)

export default UserRegisterModel
import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database Connected')
    } catch (error) {
        console.log('Error in MongoDB Connection')
        console.log(error)
    }
}

export default ConnectDB
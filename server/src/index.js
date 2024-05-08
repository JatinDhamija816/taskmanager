import app from "./app.js";
import dotenv from 'dotenv'
import ConnectDB from "./db/index.js";

dotenv.config()

const port = process.env.PORT || 5000

ConnectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server start  at http://localhost:${port}/`)
        })
        app.get('/', (req, res) => {
            res.send("GET Request Called")
        })
    }).catch((err) => {
        console.log('Error in index file')
        console.log(err)
    })
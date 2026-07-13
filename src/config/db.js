const mongoose = require("mongoose")




async function connectToDB(){

    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Database connected successfully")
        })
        .catch((err) => {
            console.log("Database connection failed:", err.message)
            process.exit(1)
        })
}

module.exports = connectToDB
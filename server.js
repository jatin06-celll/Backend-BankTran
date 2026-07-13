require('dotenv').config()


const connectToDB = require("./src/config/db");
const app = require("./src/app");


connectToDB()

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
    
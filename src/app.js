const express = require("express")
const cookieParser = require("cookie-parser")


/**
 * -Routes required
 */
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")


const app = express();

app.use(express.json())
app.use(cookieParser())

app.get("/" , (req , res ) => {
    res.send("Bank_tran backend running")
})


/**
 *  - Use Routes
 */
app.use("/api/auth", authRouter)
app.use("/api/account/", accountRouter)


module.exports = app;
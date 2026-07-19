const mongoose = require("mongoose")


const accountSchema = mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : [ true, "user id is required" ],  
        index: true 
    },
    status: {
        type: String,
        enum: {
            values: ["ACTIVE", "FROZEN", "CLOSED"],
            message: "Status can be ACTIVE, FROZEN, or CLOSED"
        },
        default: "ACTIVE"
    },
    currency: {
        type: String,
        required: [true, "Currency is required"],
        default: "INR"
    }   
}, {
    timestamps: true 
})

accountSchema.index({user:1, status:1})

const accountModel = mongoose.model("account", accountSchema)
module.exports = accountModel

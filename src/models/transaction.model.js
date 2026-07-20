const mongooes = require("mongoose")



const transactionSchema = new mongooes.Schema({
     
    fromAccount : {
        type : mongooes.Schema.Types.ObjectId,
        ref:"account",
        required : [true, "fromAccount is required"],
        index : true
    },
    toAccount : {
        type : mongooes.Schema.Types.ObjectId,
        ref:"account",
        required : [true, "toAccount is required"],
        index : true
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        min: [0, "Transaction amount cannot be negative"]
    },
    currency: {
        type: String,
        required: [true, "Currency is required"],
        default: "INR"
    },
    status: {
        type: String,
        enum: {
            values: ["PENDING", "COMPLETED", "FAILED", "REVERSED"],
            message: "Status can be PENDING, COMPLETED, FAILED, or REVERSED"
        },
        default: "PENDING"
    },
    idempotencyKey: {
        type: String,
        required: [true, "Idempotency key is required"],
        unique: true,
        index: true
    },
}, {
    timestamps: true
})

const transactionModel = mongooes.model("transaction", transactionSchema)

module.exports = transactionModel   
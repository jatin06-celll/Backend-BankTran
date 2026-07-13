const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")


const userSchema = new mongoose.Schema({
    email:{
        type : String,
        required : [true, "email is required"],
        trim : true,
        lowercase : true,
        unique : [true, "email is already taken"],
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "email is invalid"]  
    },
      name: {
        type: String,
        required : [true, "name is required"], 
      },
      password:{
        type: String,
        required : [true, "password is required"], 
        minLength: [6 , "password must be at least 6 characters long"],
        select: false
      }
  } ,   {
    timestamps: true  
})

userSchema.pre("save", async function() {
    if(!this.isModified("password")) {
        return 
    }
   const hash = await bcrypt.hash(this.password, 10)
   this.password = hash
})

userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password)
}

const userModel = mongoose.model("user", userSchema)
module.exports = userModel
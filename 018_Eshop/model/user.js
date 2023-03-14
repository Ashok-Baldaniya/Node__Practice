const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    pass: {
        type: String
    },
    phno: {
        type: Number
    },
    gender: {
        type: String
    },
    Tokens: [{
        token: {
            type: String
        }
    }]
})

userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("pass")) {
            this.pass = await bcrypt.hash(this.pass, 10)
            next()
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = new mongoose.model("User", userSchema)
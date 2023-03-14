const mongoose = require("mongoose")
const express = require("express")
const bcrypt = require("bcryptjs")
const { response } = require("express")


const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})


userSchema.pre("save", async function () {
    try {
        this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
        response.send(error)
    }
})

module.exports = new mongoose.model("User", userSchema);
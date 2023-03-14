const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const User = require("../model/User")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")

router.post("/users", async (req, resp) => {
    try {
        const user = new User(req.body)
        const data = await user.save();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/users", auth, async (req, resp) => {
    try {
        const data = await User.find();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findById(id);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndUpdate(id, req.body);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndDelete(id);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


router.post("/login", async (req, resp) => {
    try {
        const data = await User.findOne({ email: req.body.email })
        if (!data) {
            resp.send("invalid email or password")
        }
        else {
            const valid = await bcrypt.compare(req.body.password, data.password)
            if (!valid) {
                resp.send("invalid email or password")
            }
            else {
                const token = await jwt.sign({ _id: data._id }, "thisismytoken")
                resp.send("authtoken : " + token)
            }
        }
    } catch (error) {
        resp.send(error)
    }
})


module.exports = router;
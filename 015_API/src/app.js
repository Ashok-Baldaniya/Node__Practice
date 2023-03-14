const express = require("express")
const app = express()
const mongoose = require("mongoose")

const PORT = 9000;
const dburl = "mongodb://127.0.0.1:27017/30dec"
app.use(express.json())


mongoose.connect(dburl).then(() => {
    console.log("db connected successfully");
}).catch(err => {
    console.log(err);
})

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

const User = new mongoose.model("User", userSchema)

app.post("/users", async (req, resp) => {
    try {
        const user = new User(req.body)
        const data = await user.save();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

app.get("/users", async (req, resp) => {
    try {
        const user = await User.find();
        resp.send(user)
    } catch (error) {
        resp.send(error)
    }
})

app.get("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const user = await User.findById(id);
        resp.send(user)
    } catch (error) {
        resp.send(error)
    }
})

app.put("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndUpdate(id, req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


app.delete("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndDelete(id, req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


app.listen(PORT, () => {
    console.log("server running on port : " + PORT);
})

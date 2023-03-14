const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs")
const auth = require("../middleware/auth")
const multer = require("multer")
const fs = require("fs")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/profile")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})

const upload = multer({ storage: storage })

router.get("/", (req, resp) => {
    resp.render("index")
})

router.post("/adduser", upload.single("file"), async (req, resp) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            img: req.file.filename
        })
        await user.save();
        resp.render("index", { "msg": "registration successfully done !!!" })
    } catch (error) {
        resp.send(error)
    }
})

router.get("/display", auth, async (req, resp) => {
    try {
        const users = await User.find();
        resp.render("display", { data: users })
    } catch (error) {
        resp.send(error)
    }
})

router.get("/delete", async (req, resp) => {
    const id = req.query.did
    try {
        const data = await User.findByIdAndDelete(id)
        fs.unlinkSync(path.join(__dirname, `../public/profile/${data.img}`))
        resp.redirect("display")
    } catch (error) {
        resp.send(error)
    }
})

router.get("/update", async (req, resp) => {
    const id = req.query.uid
    try {
        const users = await User.findOne({ _id: id })
        resp.render("update", { data: users })

    } catch (error) {
        resp.send(error)
    }
})

router.post("/updateUser", upload.single("file"), async (req, resp) => {
    try {
        const data = await User.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            img: req.file.filename
        })
        fs.unlinkSync(path.join(__dirname, `../public/profile/${data.img}`))
        resp.redirect("display")
    } catch (error) {
        await User.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        resp.redirect("display")
    }
})

router.get("/loginpage", async (req, resp) => {
    resp.render("login")
})

router.post("/login", async (req, resp) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        const isvalid = await bcrypt.compare(req.body.password, user.password)
        if (isvalid) {
            const token = await user.generateToken();
            resp.cookie("jwt", token)
            resp.redirect("display")
        }
        else {
            resp.render("login", { msg: "invalid email or password" })
        }
    } catch (error) {
        resp.render("login", { msg: "invalid email or password" })
    }
})

router.get("/logout", auth, async (req, resp) => {
    try {
        const user = req.user
        const token = req.token

        user.Tokens = user.Tokens.filter(ele => {
            return ele.token != token
        })
        await user.save();
        resp.clearCookie("jwt")
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})

router.get("/logoutall", auth, async (req, resp) => {
    try {
        const user = req.user
        const token = req.token

        user.Tokens = [];
        await user.save();
        resp.clearCookie("jwt")
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
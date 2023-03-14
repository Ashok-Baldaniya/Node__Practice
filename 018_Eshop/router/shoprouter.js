const router = require("express").Router()
const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Category = require("../model/Category")

router.get("/", async (req, resp) => {
    const cat = await Category.find()
    resp.render("index", { cdata: cat })
})

router.get("/cart", (req, resp) => {
    resp.render("shoping-cart")
})

router.get("/contact", (req, resp) => {
    resp.render("contact")
})

router.get("/shopdetail", (req, resp) => {
    resp.render("shop-details")
})

router.get("/shopgrid", (req, resp) => {
    resp.render("shop-grid")
})

router.get("/login", (req, resp) => {
    resp.render("login")
})

router.get("/reg", (req, resp) => {
    resp.render("registration")
})

router.post("/userreg", async (req, resp) => {
    try {
        const data = new User(req.body)
        await data.save()
        resp.render("registration", { msg: "registration successfully...." })
    } catch (error) {
        console.log(error);
    }
})

router.get("/loginpage", (req, resp) => {
    resp.render("login")
})

router.post("/login", async (req, resp) => {
    try {
        const data = await User.findOne({ email: req.body.email })
        const isvalid = await bcrypt.compare(req.body.pass, data.pass)

        if (isvalid) {
            const token = await jwt.sign({ _id: data._id }, process.env.SKEY)
            resp.cookie("jwt", token)
            data.Tokens = data.Tokens.concat({ token })
            data.save()
            resp.render("index")
        }
        else {
            resp.render("login", { msg: "invalid email or password" })
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
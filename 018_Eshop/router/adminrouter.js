const router = require("express").Router()
const admin = require("../model/admin")
const Admin = require("../model/admin")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
const Category = require("../model/Category")


router.get("/dashboard", (req, resp) => {
    resp.render("dashboard")
})

router.get("/adminlogin", (req, resp) => {
    resp.render("adminlogin")
})


router.get("/regpage", (req, resp) => {
    resp.render("adminregistration")
})

router.post("/alogin", async (req, resp) => {
    try {
        const data = await Admin.findOne({ email: req.body.email })
        if (data.password == req.body.password) {
            const token = await jwt.sign({ _id: data._id }, process.env.SKEY)
            resp.cookie("jwt", token)
            resp.redirect("dashboard")
        }
        else {
            resp.render("adminlogin", { msg: "invalid credentials" })
        }
    } catch (error) {
        resp.render("adminlogin", { msg: "invalid credentials" })
    }
})

router.get("/alogout", auth, (req, resp) => {
    resp.clearCookie("jwt")
    resp.redirect("adminlogin")
})


/* *********************** Product Category ******************* */


router.get("/category", async (req, resp) => {
    try {
        const cat = await Category.find()

        resp.render("productcategory", { cdata: cat })
    } catch (error) {
        console.log(error);
    }
})


router.post("/addcategory", async (req, resp) => {
    try {
        const data = new Category(req.body)
        await data.save()
        resp.redirect("category")
    } catch (error) {
        console.log(error);
    }
})



module.exports = router
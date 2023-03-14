const express = require("express")
const router = express.Router()
const Category = require("../model/category")

router.post("/categories", async (req, resp) => {
    try {
        const category = new Category(req.body)
        const result = await category.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/categories", async (req, resp) => {
    try {
        const result = await Category.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/categories:id", async (req, resp) => {
    const id = req.params.id
    try {
        const result = await Category.findById(id);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})


router.put("/categories:id", async (req, resp) => {
    const id = req.params.id
    try {
        const result = await Category.findByIdAndUpdate(id, req.body);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/categories:id", async (req, resp) => {
    const id = req.params.id
    try {
        const result = await Category.findByIdAndDelete(id);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})


module.exports = router
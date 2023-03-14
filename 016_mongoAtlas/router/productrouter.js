const express = require("express")
const router = express.Router()
const Product = require("../model/Product")
const Category = require("../model/category")

router.post("/products", async (req, resp) => {
    try {
        const product = new Product(req.body)
        const result = await product.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/products", async (req, resp) => {
    try {
        const result = await Product.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/products/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const result = await Product.findById(id);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/products/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const result = await Product.findByIdAndUpdate(id, req.body);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/products/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const result = await Product.findByIdAndDelete(id);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/products/category/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const result = await Product.find({ catid: id })
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

module.exports = router
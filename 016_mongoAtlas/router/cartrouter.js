const express = require("express")
const { default: mongoose, Aggregate } = require("mongoose")
const auth = require("../middleware/auth")
const router = express.Router()
const Cart = require("../model/Cart")
const { route } = require("./productrouter")


router.post("/carts", auth, async (req, resp) => {

    try {
        const cat = new Cart({
            uid: req.uid,
            pid: req.body.pid,
            qty: req.body.qty
        })

        const result = await cat.save()
        resp.send(result)

    } catch (error) {
        resp.send(error)
    }
})


router.get("/carts", auth, async (req, resp) => {

    try {
        const data = await Cart.aggregate([{ $lookup: { from: 'users', localField: 'uid', foreignField: '_id', as: 'User' } }, { $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'Product' } }])
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/carts/:id", async (req, resp) => {

    const _id = req.params.id
    try {
        const data = await Cart.findById(_id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/carts/:id", async (req, resp) => {

    const _id = req.params.id
    try {
        const data = await Cart.findByIdAndUpdate(_id, req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/carts/:id", async (req, resp) => {

    const _id = req.params.id
    try {
        const data = await Cart.findByIdAndDelete(_id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

// router.get("/carts/user/:id", async (req,resp)=>{
//     const _id=req.params.id
//     try {
//         const data= await Cart.find({uid:_id})
//         resp.send(data)
//     } catch (error) {
//         resp.send(error)
//     }
// })


router.get("/carts/user/:id", auth, async (req, resp) => {

    const _id = mongoose.Types.ObjectId(req.uid)
    // const _id = mongoose.Types.ObjectId(req.params.id)

    try {
        const data = await Cart.aggregate([{ $match: { uid: _id } }, { $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'product' } }])
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


router.get("/carts/cart/abc", async (req, resp) => {
    try {

        const data = await Cart.aggregate([
            {
                $group: {
                    _id: "$pid",
                    subTotal: { $sum: "$qty" }
                }
            },

            {
                $lookup: { from: "products", localField: "_id", foreignField: "_id", as: "productName" }
            },

            {
                $group: {
                    _id: null,
                    results: { $push: "$$ROOT" },
                    grandTotal: { $sum: "$subTotal" }
                }
            }

        ])
        // for (let i = 0; i < data[0].results.length; i++) {

        // }

        // for length -> data[0].results.length
        // resp.send({ data[0].results[1].productName[0].pname })
        resp.send(data)

    } catch (error) {
        resp.send(error)
    }
})

module.exports = router
const mongoose = require("mongoose")
const express = require("express")
const app = express();
const PORT = 9000;
const path = require("path")
const hbs = require("hbs")
const bodyparser = require("body-parser")
const cookieParser = require('cookie-parser')

const dburl = "mongodb+srv://ashok:ashok@cluster0.kyysrgr.mongodb.net/myweb?retryWrites=true&w=majority"

mongoose.connect(dburl).then(() => {
    console.log("db connected successfully ..");
}).catch(err => {
    console.log(err);
})

app.use(bodyparser.urlencoded({ extended: false }))

const viewpath = path.join(__dirname, "../templates/views")
const publicpath = path.join(__dirname, "../public")

app.use(express.static(publicpath))
app.set("view engine", "hbs")
app.set("views", viewpath)
app.use(cookieParser())

const userrouter = require("../router/userouter")
app.use("/", userrouter)

app.listen(PORT, () => {
    console.log("server running on port : " + PORT);
})
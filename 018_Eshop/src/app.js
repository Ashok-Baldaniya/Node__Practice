const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const bodyparser = require("body-parser")
const cookieParser = require("cookie-parser")
const hbs = require("hbs")

const dotenv = require("dotenv")
dotenv.config()


const PORT = process.env.PORT
const dburl = process.env.dburl

mongoose.connect(dburl).then(() => {
    console.log("database connected...");
}).catch(err => {
    console.log(err);
})

const viewpath = path.join(__dirname, "../templates/views")
const partialpath = path.join(__dirname, "../templates/partials")
const publicpath = path.join(__dirname, "../public")

app.set('view engine', 'hbs')
app.set("views", viewpath)
app.use(express.static(publicpath))
hbs.registerPartials(partialpath)

app.use(bodyparser.urlencoded({ extended: false }))
app.use(cookieParser())

const shoprouter = require("../router/shoprouter")
app.use("/", shoprouter)

const adminrouter = require("../router/adminrouter")
app.use("/", adminrouter)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
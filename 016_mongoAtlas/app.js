const mongoose = require("mongoose")
const express = require("express")
const app = express();
const PORT = 9000;

app.use(express.json())

const dburl = "mongodb+srv://ashok:ashok@cluster0.kyysrgr.mongodb.net/newdb?retryWrites=true&w=majority";

mongoose.connect(dburl).then(() => {
  console.log("db connected....");
}).catch((err) => {
  console.log(err);
})

const userrouter = require("./router/userrouter")
const categoryrouter = require("./router/categoryrouter")
const productrouter = require("./router/productrouter")
const cartrouter = require("./router/cartrouter")

app.use("/", userrouter)
app.use("/", categoryrouter)
app.use("/", productrouter)
app.use("/", cartrouter)

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
})


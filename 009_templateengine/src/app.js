const express=require("express")
const app=express();
const path=require("path")
const hbs = require("hbs")


const dotenv=require("dotenv")
dotenv.config();
const PORT=process.env.PORT;
const NAME=process.env.NAME;    

const viewpath=path.join(__dirname,"../templates/views")
app.set("view engine","hbs")
app.set("views",viewpath)


    const partialpath=path.join(__dirname,"../templates/partials")
    hbs.registerPartials(partialpath)

    const publicpath = path.join(__dirname,"../public")
    app.use(express.static(publicpath))


app.get("/",(req,resp)=>{
    resp.render("home",{NAME})
})  

app.get("/about",(req,resp)=>{
    resp.render("about")
})

app.get("/contact",(req,resp)=>{
    // resp.render("contact",{address:"surat,gujarat"})
    const adr = ["surat", "gujarat", "India"];
    resp.render("contact", { address: adr })
})

app.get("/help",(req,resp)=>{
    resp.render("help")
})  

app.get("/report",(req,resp)=>{
    resp.render("report")
})  

app.get("/weather",(req,resp)=>{
    resp.render("weather")
})  

app.listen(PORT,()=>{
    console.log("server on port : "+ PORT);
})

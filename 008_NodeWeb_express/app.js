const express=require("express")
const app=express();
const path=require("path")
const PORT=9000;


app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"))
})
app.get("/home",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"))
})
app.get("/contact",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"contact.html"))
})
app.get("/help",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"help.html"))
})

app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"about.html"))
})

app.get("*",(req,resp)=>{
    resp.send("404 page not found");
})

app.listen(PORT,()=>{
    console.log("server is running on port -> "+PORT);
})

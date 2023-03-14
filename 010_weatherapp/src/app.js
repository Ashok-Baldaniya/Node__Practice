// const exp = require("constants");
const express = require("express")
const app = express()
const hbs = require("hbs")
const path = require("path")
const PORT = 9000;
const geocode = require("../util/geocode")
const weather = require("../util/weather")

const viewpath = path.join(__dirname, "../templates/views")
const publicpath = path.join(__dirname, "../public")

app.set("view engine", "hbs")
app.set("views", viewpath)
app.use(express.static(publicpath))

app.get("/", (req, resp) => {

    resp.render("index")
})

app.get("/weather",(req,resp)=>{

    const location = req.query.location

    geocode.geocodedata(location, (err, data) => {
        if (err) {
            console.log("Invalid api");
            return;
        }

        lat = data.lat;
        lng = data.lng;

        weather.weatherdata(lat, lng, (err, data) => {
            if (err) {
                console.log("Invalid api");
                return;
            }
            resp.send(data)
        })
    })
})

app.listen(PORT, () => {
    console.log("server running on port : " + PORT);
})
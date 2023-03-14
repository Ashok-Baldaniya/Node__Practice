const weather = require("./weather")
const geocode = require("./geocode");

const city=process.argv[2];
if (!city) {
    console.log("please enter city name");
    return;
}


geocode.geocodedata(city,(err,data)=>{
    if (err) {
        console.log("Invalid API");
        return;
    }
            lat=data.lat
            lng=data.lng

            // console.log(`lattitude:${lat} Longitude:${lng}`);

            weather.weatherdata(lat,lng,(err,data)=>{
                if (err) {
                    console.log("Invalid Api");
                   return;
                }
                
                console.log(data);
            })
})



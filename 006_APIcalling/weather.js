const axios=require("axios")

// var lat=process.argv[2]
// var lng=process.argv[3]

const weatherdata=(lat,lng,callback)=>{
   const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6f920c9d5312c0c1a1fdf34f74258db6&units=metric`;

   axios.get(url).then(result=>{
      const temp=result.data.main.temp;
      const pressure=result.data.main.pressure
      const humidity=result.data.main.humidity
      const city=result.data.name


   
      // console.log(`
      // City:${city},
      // Temp:${temp},
      // Pressure:${pressure},
      // Humidity:${humidity}
      // `);


      callback(undefined,{temp,pressure,humidity,city});
      
   }).catch(err=>{
       callback(err);
      // console.log(err);
   }) 
}

module.exports={weatherdata}

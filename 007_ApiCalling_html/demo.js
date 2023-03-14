var headers = new Headers();
headers.append("X-CSCAPI-KEY", "YUs3R1Z5YW1yUUJKN1Q2RzBqTWVxaHdRVEpraUlOeDZjYmF3NWsyYQ==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};



const getcountry=()=>{
    fetch(`https://api.countrystatecity.in/v1/countries`, requestOptions).then(response=>{
    return response.json();
}).then(result=>{
    // console.log(result[0]);
    var options= "<option>--select country--</option>";
           for (let i = 0; i < result.length; i++) {
            // console.log(result[i].name);
            options = options + "<option value=" +result[i].iso2+ ">"+result[i].name+"</option>"
        }
       country.innerHTML=options;
    }).catch(err=>{
        console.log(err);
    })
}


var countrycode;
const getstate=(ccode)=>{
    countrycode=ccode;
    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, requestOptions).then(response=>{
    return response.json();
}).then(result=>{
    var options= "<option>--select state--</option>";
           for (let i = 0; i < result.length; i++) {
            // console.log(result[i]);
            options = options + "<option value=" +result[i].iso2+ ">"+result[i].name+"</option>"
        }
        // console.log(options);
        state.innerHTML=options
    }).catch(err=>{
        console.log(err);
    })
}


const getcity=(scode)=>{
    fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${scode}/cities`, requestOptions).then(responce=>{
    return responce.json();
}).then(result=>{
    var options= "<option>--select city--</option>";
           for (let i = 0; i < result.length; i++) {
            // console.log(result[i]);
            options = options + "<option>"+result[i].name+"</option>"
        }
        city.innerHTML=options
    }).catch(err=>{
        console.log(err);
    })
}
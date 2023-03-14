
var headers = new Headers();
headers.append("X-CSCAPI-KEY","aHAwSE1FQUpHMExPYU95TmZJT2g2c29iTFpyN0NOVWc1eUk5emZKbw==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

const getcountry=()=>{
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.json())
    .then(result => {
        var options="<option>---Select country---</option>"
        for (let i = 0; i < result.length; i++) {
            options=options+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
        }
        country.innerHTML=options
    })
    .catch(error => console.log('error', error));
}

var countrycode;
const getstate=(ccode)=>{
    countrycode=ccode;
    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, requestOptions)
    .then(response => response.json())
    .then(result => {
        var options="<option>---Select state---</option>"
        for (let i = 0; i < result.length; i++) {
            options=options+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
        }
        state.innerHTML=options
    })
    .catch(error => console.log('error', error));
}


const getcity=(scode)=>{
    fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${scode}/cities`, requestOptions)
    .then(response => response.json())
    .then(result => {
        var options="<option>---Select city---</option>"
        for (let i = 0; i < result.length; i++) {
            options=options+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
        }
        city.innerHTML=options
    })
    .catch(error => console.log('error', error));
}

const getlatlng=(city)=>{
    fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${scode}/cities`, requestOptions)
    .then(response => response.json())
    .then(result => {
        var options="<option>---Select city---</option>"
        for (let i = 0; i < result.length; i++) {
            options=options+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
        }
        city.innerHTML=options
    })
    .catch(error => console.log('error', error));
}

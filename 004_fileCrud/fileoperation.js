const fs=require("fs")

/* *****->1. Only For Adding File use with 1.view<-***** */
// const addfile=(data)=>{
//     const dt=JSON.stringify(data)
//     fs.writeFile("userdata.json",dt,()=>{
//         console.log("file written successfully");
//     })
// }



/* *************-> 2.For Alert Duplicate File <-*************** */
const addfile=(data)=>{
    const alldata=view();
    const duplicate=alldata.find(ele=>{
        return ele.name==data.name;
    })
    if (duplicate) {
        console.log("data already exist");
        return;
    }
    alldata.push(data)
    const dt=JSON.stringify(alldata)
    fs.writeFile("userdata.json",dt,()=>{
        console.log("file written successfully");
    })
}




/* *************-> 1.2.This display normal file <-*************** */
const viewfile=()=>{
    const data=view()
    console.log(data);
}



/* -> 1.This return normal file use when only view data<-*************** */

// const view=()=>{
//     var dt;
//     var data=fs.readFileSync("userdata.json","utf-8")
//     dt=JSON.parse(data)
//     return dt;
//     // console.log(dt); // use if "return dt,viewfile" is not in use
// }

/* -> 2.This return normal file use only when we restrict data from duplicate */

const view=()=>{
    try {
        var data=fs.readFileSync("userdata.json","utf-8");
    const dt=JSON.parse(data);
    return dt;
    } catch (error) {
        return [];
    }
}



/* *************-> This remove data from file <-*************** */
const removedata=(name)=>{
    const alldata= view();
    const newdata=alldata.filter(ele=>{
          return ele.name!=name
    })

    const dt=JSON.stringify(newdata)
    fs.writeFile("userdata.json",dt,()=>{
        console.log("file update successfully");
    })
}


module.exports={addfile,viewfile,removedata}
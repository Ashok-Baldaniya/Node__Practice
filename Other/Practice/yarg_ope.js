
const fs=require("fs")

const addfile=(data)=>{
    const dt=JSON.stringify(data)
    console.log(dt);
    fs.writeFile("user.json",dt,()=>{
        console.log("file written successfuly");
    })
}

const viewfile=()=>{
    const data=view()
    console.log(data);
}


const view=()=>{
    var dt;
    const data=fs.readFileSync("userdata.json","utf-8")

    dt=JSON.parse(data)
    return dt;
}

module.exports={addfile,viewfile}
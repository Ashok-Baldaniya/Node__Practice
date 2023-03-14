const fs=require("fs")

const addData=(data)=>{
    const alldata=view();

    const duplicate=alldata.find(ele=>{
        return ele.name == data.name
    })
    if (duplicate) {
        console.log("name exist");
        return;
    }
    alldata.push(data);
/* ---------------------------------------------------------- */
    const dt=JSON.stringify(alldata)
      fs.writeFile("userdetail.json",dt,()=>{
        console.log("file written successfully");
      })
}

const viewdata=()=>{
    const data=view();
    console.log(data);
}

const viewbyname=(name)=>{
    const alldata=view();

    const duplicate=alldata.find(ele=>{
        return ele.name == name
    })
    console.log(duplicate);
}

const view=()=>{
     try {
        const data=fs.readFileSync("userdetail.json","utf-8")
        return JSON.parse(data)
        
     } catch (error) {
        return [];
     }
}

module.exports={addData,viewdata,viewbyname}
const allstudnt=(id)=>{
    return new Promise((resolve,reject)=>{
        var st=["ashok","vidhan","vaibhav","ajay"]
        return resolve(st[id])
    })
}

const info=()=>{
    
}

module.exports={allstudnt}
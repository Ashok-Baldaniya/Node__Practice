
const yargs=require("yargs")
const file=require("./yarg_ope")

yargs.command({
    command:"add",
    builder:{
        name:{
            type:String
        }
        ,
        phno:{
            type:Number
        }
    },
    handler:function(argv){
        const data={
             name:argv.name,
             phno:argv.phno
        }
        file.addfile(data);
    }

})

yargs.command({
    command:"view",
    handler:function(){
        file.viewfile()
    }
})

yargs.argv
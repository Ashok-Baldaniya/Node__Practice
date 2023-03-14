const yargs=require("yargs")
const file=require("./operation")

yargs.command({
    command:"add",
    builder:{
        name:{
            type:String
        },
        task:{
            type:String
        }
    },
    handler:function(argv){
          const data={
                name:argv.name,
                task:argv.task
          }
          file.addData(data);
    }
})

yargs.command({
    command:"view",
    handler:function(){
        file.viewdata();
    }
})

yargs.command({
    command:"vbn",
    builder:{
        name:{
            type:String
        }
    },
    handler:function(argv){
        file.viewbyname(argv.name);
    }
})


yargs.argv
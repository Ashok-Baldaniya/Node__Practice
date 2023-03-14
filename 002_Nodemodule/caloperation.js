const ope=require("./calc")

var a=20;
var b=10;

ope.add(a,b,(ab,bc)=>{
    console.log(ab+" "+bc);
    ope.square(ab,(r)=>{
        console.log(r);
    })
})


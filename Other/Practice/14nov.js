// all function ref from (14nov.html)
// function add() {
//     var a=document.getElementById("n1").value;
//     var b=document.getElementById("n2").value;
//     var result=document.getElementById("result")

//     var r=Number(a)+Number(b);
//     result.innerHTML=r;
// }
// function sub() {
//     var a=document.getElementById("n1").value;
//     var b=document.getElementById("n2").value;
//     var result=document.getElementById("result")

//     var r=Number(a)-Number(b);
//     result.innerHTML=r;
// }
// function mul() {
//     var a=document.getElementById("n1").value;
//     var b=document.getElementById("n2").value;
//     var result=document.getElementById("result")

//     var r=Number(a)*Number(b);
//     result.innerHTML=r;
// }
// function div() {
//     var a=document.getElementById("n1").value;
//     var b=document.getElementById("n2").value;
//     var result=document.getElementById("result")

//     var r=Number(a)/Number(b);
//     result.innerHTML=r;
// }



// // setTimeout
// setTimeout(() => {
//     const mydate=new Date();
//     document.getElementById("dt").innerHTML=mydate
// }, 2000);


// // setInterval
// setInterval(() => {
//     const mydate=new Date();
//     document.getElementById("dt").innerHTML=mydate
// }, 1000);



var a;
class demo{
       constructor(x){
        console.log("constructor is calling..");
       }

       display(){
        console.log("display method calling.."+a);
       }

       static sample(){
        console.log("sample calling");
       }
}

var mydemo = new demo(10);
mydemo.display(10);
// mydemo.sample();

var mydemo1 = new demo(20);
mydemo1.display(20);

demo.sample();

const mydate = new Date();
console.log(mydate);
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getDate());
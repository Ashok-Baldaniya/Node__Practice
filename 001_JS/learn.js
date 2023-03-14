// Differance between Null & Undefined.
// var myvalue=null;
// var mydata;
// console.log(myvalue);
// console.log(mydata);

// console.log(typeof(myvalue));
// console.log(typeof(mydata));


// Operator.
// console.log(4+4);
// console.log(4+"data");
// console.log(4+"4");
// console.log(4-"data");
// console.log(7-"5");
// console.log("7"-"5");
// console.log(4**4);


// Diff between "==" and "==="
// var a=2;
// var b="2";
// console.log(a==b);     // compare value.
// console.log(a===b);    // compare value and datatype.


// Turnary
// var a=100;
// var b=20;
// var c=50;
// var result= (a>b)&&(a>c) ? a : (b>c)?b:c
// console.log(result);


// Statement

// if (a>b && a>c) {
//     console.log("a is greater");
// }
// else
// {
//     if (b>c) {
//         console.log("b is greater");
//     }
//     else
//     {
//         console.log("c is greater");
//     }
// }



// if_else statement
// if (a>b && a>c) {
//     console.log("a is greater");
// }
// else if(b>c)
// {
//     console.log("b is greater");
// }
// else
// {
//     console.log("c is greater");
// }




// Switch Statement
// var choice=3;

// switch (choice) {
//         case 1:
//         console.log("your choice no 1.");
//         break;
//         case 2:
//         console.log("your choice no 2.");
//         break;
//         case 3:
//         console.log("your choice no 3.");
//         break;
//         case 4:
//         console.log("your choice no 4.");
//         break;

//     default:
//         console.log("choose correct");
//         break;
// }


// For loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }



// -> Function

// function add(a,b){
//       console.log("adition of a and b is : "+`${a+b}`);
// }
// add(10,20);


// function add(a,b=8){
//       console.log("adition of a and b is : "+`${a+b}`);
// }
// add(10);


// function square(a){
//       return a*a;
// }
// console.log(square(7));



// -> Aerrow Function

// const fo=function fo(){
//       console.log("hello world");
// }
// fo();


// function fo(){
//    console.log("hello world");
// }
// fo();


// const fo=()=>{
// console.log("hello world");
// }
// fo();



// var mul=(a,b)=>{
//       console.log(`multiplication of ${a} and ${b} is ${a*b}`);
//       console.log("multiplication of "+a+ " and " +b+ " is " +(a*b));
// }
// mul(10,20);




// -> Block and Global Scope

// function mydata() {
//     var fname = "tech";
//     if (true) {

//         let lname = "tops";
//         console.log(fname);
//     }
//     console.log(lname);
// }
// mydata();




// var a=[47,59,43,24,64,243,54,765];
// console.log(a.length);
// console.log(a[2]);
// console.log(a.reverse()); //reverse use for array
// console.log(a.pop());
// console.log(a.push(239));
// console.log(a.shift());
// console.log(a.unshift(56));
// console.log(a);



// var a = [10, 10, 10, 10, 10]
// var sum = 0;
// var max = a[0];
// for (let i = 0; i < a.length; i++) {
//     sum = sum + a[i];
//     if (a[i] > max) {
//         max = a[i];
//     }
// }
// console.log(max);
// console.log("the addition is : "+sum);
// console.log("the average is : "+sum/a.length);



// -> string Operation

// var str = "sun rise in east";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.slice(4,9));
// console.log(str.replace("sun","moon"));
// console.log(str.charAt(1));
// console.log(str.indexOf("n"));
// console.log(str.lastIndexOf("n"));
// console.log(str.endsWith("east"));
// console.log(str.startsWith("sun"));
// console.log(str.trimStart().concat(" hello"));
// console.log(str.trimEnd().concat(" hello"));
// console.log(str.trim());
// var s = str.split(" ");



// console.log(s);


// -> String word index reverse

// for (let i = s.length-1; i >= 0; i--) {
// console.log(s[i]);    
// }



// -> String First and Last word replace

// var temp = s[0];
// s[0] = s[s.length - 1];
// s[s.length - 1] = temp;

// for (let i=0 ; i < s.length; i++) {
//     console.log(s[i]);
// }




// -> String Reverse
// for (let i = str.length-1; i >=0 ; i--) {
//     console.log(str[i]);
// }





// -> Object

// var obj1={
//     name:"ashok",
//     phno:"8765456733",
//     email:"ashok@gmail.com"
// }

// var obj2={
//     name:"anil",
//     phno:"7654567744",
//     email:"anil@gmail.com"
// }

// console.log(obj1);
// console.log(obj2);
// console.log(obj1.phno);


// var data=[obj1,obj2];
// console.log(data);


// var a;
// var b;

// class demo {
//     constructor(x, y) {
//         a = x;
//         b = y
//         console.log("cons is calling " + (a + b));
//     }
//     display() {
//         console.log("display calling " + (a + b));
//     }
//     static sample() {
//         console.log("sample calling " + (a + b));
//     }
// }

// const mydemo = new demo(10,20);
// console.log(mydemo);
// console.log(mydemo.display());
// demo.display();




// -> Use of Date function
// const data=new Date();
// console.log(data.getDate());
// console.log(data.getFullYear());















































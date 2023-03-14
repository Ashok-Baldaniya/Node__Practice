// -> It is Called "Template literal" ->  `${ }`
// mul(4);
// function mul(a,b=6){
//     console.log(a*b);
// }


// -> Diff Between Normal And Aerrow Function

/*  1.In aerrow function you are not call function before declaration when it 
is possible in normal function 
    2. In aerrow function we use aerrow instead of "Function" 
*/
// -> Normal function
// function sum(){
//     return `sum of two number is ${(a=5)+(b=6)}`;
// }
// console.log(sum());


// -> Aerow function
// const sum = ()=>{
//     return `sum of two number is ${(a=5)+(b=6)}`;
// }
// console.log(sum());


// -> Array - To store multiple data of different type in single variable.

// var name = new Array;  // here we create new instance (name) of array. 
// var name=["ashok","ramesh","jignesh","rakesh"];
// console.log(name);                                  // OR


// var name=["abhay","ashok","ramesh","jignesh","rakesh"];
// console.log(name);
// console.log(name[1]);

/* -> Length start from 1. , and index position start from 0. */

// console.log(name.length);
// console.log(name[name.length-1]);

// -> To print all element of array with normal for loop and for of loop
// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }


// -> For of loop (give value)
// for(let ok of name){
//     console.log(ok);
// }


// -> For in loop (give key)
// for(let ok in name){
//     console.log(ok);
// }


// -> ForEach loop : Combination of "for in" and "for of"  loop + "full array"
// name.forEach( function(value,key,array){
//     console.log(value +" :"+ key +" ->"+ array);
// });

// -> ForEach loop with aerrow function
// name.forEach((value,key,array)=>{
//     console.log(value +" : "+ key +" -> "+ array);
// });


// -> Searching anf Filter in Array
// var name=["abhay","ashok","jignesh","ramesh","rakesh","amit"];

// -> Search Forward from given index position if there is no any index found then it return -1.
// console.log(name.indexOf("ramesh",2));    
// console.log(name.indexOf("Ramesh",1));
// console.log(name.indexOf("ramesh",1));

// -> Search Backward from given index position if there is no any index found then it return -1.
// console.log(name.lastIndexOf("ramesh",3));

// -> Includes - Determine whether array contain value. Search Forward.
// console.log(name.includes("ramesh",3));


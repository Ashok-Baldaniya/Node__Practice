/*   CRUD- Create , Read , Update ,Date   */


// const game=["carrom","hockey","football"];

// -> Push - add data in last of array, And return "new length" of array.
// game.push("vollyball");
// const nlength=game.push("vollyball");
// console.log(nlength);

// console.log(game);


// -> Unshift - add data at first of array, And return "new length" of array.

// const num=[1,2,3,4,5];
// const nlength=num.unshift(0);
// console.log(nlength);

// console.log(num);


/* -> Pop - Remove data from last of array, And return 
removed element and we get new length. */

// const num=[1,2,3,4,5];
// console.log(num);
// const nlength=num.pop();
// console.log(nlength);

// console.log(num);



/* -> shift - Remove element from first of array, And return 
removed element and we get new length of array. */

// const num=[2,3,4,5,6];
// console.log(num);
// console.log(num.shift());
// console.log(num);



/* -> Splice- Add or remove element from array and return deleted 
element/Array
Syntax: (slice from,delete upto,new element) */

// const month=  ['jan','march','april','june','july'];
// console.log(month.splice(2,4));
// console.log(month);

/* -> If we don't know length then we use "month.length" and want 
to add element at the and of array */

//  console.log(month.splice(month.length-1,0,'hello'));
//  console.log(month);


/* -> If we want to update any element at the middle then */

// const key=["add","sub","mul","div","mod"];
// console.log(key);
// const check=key.indexOf("mul");
// if(check != -1){
//     console.log(key.splice(check,1,"Mul"));
//     console.log(key);
// }
// else
// {
//     console.log("No data found");
// }



/* -> If we want to delete any element at the middle,
Here we don't give 3rd parameter to splice    */

// const key=["add","sub","mul","div","mod"];
// console.log(key);
// const check=key.indexOf("mul");
// if(check != -1){
//     console.log(key.splice(check,1));
//     console.log(key);
// }
// else
// {
//     console.log("No data found");
// }




/* -> If we want to delete all element from searched element,
Here we  give infinity as 2nd parameter to splice    */

// const key=["add","sub","mul","div","mod"];
// console.log(key);   // give full array
// const check=key.indexOf("mul");   
// console.log(check);    // give index of element
// console.log(key.splice(check,Infinity));  //return deleted element
// console.log(key);    // display new array of deleted element

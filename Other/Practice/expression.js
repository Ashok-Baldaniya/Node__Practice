// -> Conditional Statement
// 1. if
// 2. if...else 
// 3. if...else if...else



// -> if statement

// let a = prompt("what is your age?")
// a = Number.parseInt(a) //converting string to number

// if (a>18) {
//     alert("yes ,you can drive")
// }



// -> if else statement


// let b = prompt("what is your age?")

// if (b>18) {
//     alert("yes ,you can drive")
// }
// else
// {
//     alert("You Can't Drive")
// }




// -> if....else if....else statement

// let c = prompt("what is your age?")

// if (c<0) {
//     alert("not a valid age")
// }
// else if(c<9)
// {
//     alert("You can not driving")
// }
// else if(c>=9 && c<18)
// {
//     alert("You can think about driving")
// }
// else
// {
//     alert("absolutely you can drive")
// }


// -> switch statement
var ope1 = Number(prompt("enter first operand"));
var ope2 = Number(prompt("enter second operand"));
var choose =Number(prompt("1 -> + , 2 -> - ,3 -> * ,4 -> /"));

switch (choose) {
    case 1:
        // console.log(ope1 + ope2);
        alert(ope1 + ope2);
        break;

    case 2:
        // console.log(ope1 - ope2);
        alert(ope1 - ope2);
        break;

    case 3:
        // console.log(ope1 * ope2);
        alert(ope1 * ope2);
        break;

    case 4:
        // console.log(ope1 / ope2);
        alert(ope1 / ope2);
        break;

    default:
        alert("enter valid option");
        break;
}


// Conditional Statement
// let a;
// a=prompt("enter age");

// document.write(a<18 ? "Not Drive" : "Drive");
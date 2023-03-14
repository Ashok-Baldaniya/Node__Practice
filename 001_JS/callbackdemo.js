// function sum(a,b){
//     console.log(a+b);
// }

// function operation(n1,n2,callback){
//     callback(n1,n2)
// }

// operation(10,20,sum);

// function int(n1){
//        console.log(n1*n1);
// }
// function hello(a,int){
//       int(a);
// }
// hello(10,int);




function add(a, b, callback) {
    callback(a + b);
}

function square(a, callback) {
    callback(a * a, a * a * a)
}

var myfunction = () => {
    add(5, 5, (result) => {
        square(result, (sq, qb) => {
            console.log(sq + " " + qb);
        })
    })
}

myfunction();




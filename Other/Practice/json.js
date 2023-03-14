const table={
    name:"ashok",
    email:"ashok@gmail.com",
    phno:"76544567890"
}


// To convert in JSON File.
const data=JSON.stringify(table);
console.log(data);    //JSON file


// To convert JSON file to Normal File
const data1=JSON.parse(data);
console.log(data1);
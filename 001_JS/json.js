const data={
    name:"ashok",
    phno:"876545678",
    age:"24"
}
console.log(data);

// -> To convert into JSON file
const data1=JSON.stringify(data)
console.log(data1);

// -> To convert into Normal file
const data2=JSON.parse(data1)
console.log(data2);

// -> To print any one element
console.log(data.name);
console.log(data.phno);
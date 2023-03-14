const fs = require("fs")

const data = fs.readFileSync("test.txt", "utf-8")
console.log(data);
console.log("calling after Sync");


const data1 = fs.readFile("test.txt", "utf-8", (err, data) => {

    console.log(data);
})
console.log("calling after Async");
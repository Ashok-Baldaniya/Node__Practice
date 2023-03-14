// 1. -> OS-operating system module

const os = require("os");
// console.log(os.arch());    // arch()-> architecture like x64

// const fmem=os.freemem();
// console.log(`${fmem/1024/1024/1024}`); //or
// console.log(fmem/1024/1024/1024);

// const tmem=os.totalmem();
// console.log(tmem/1024/1024/1024);

// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.version());




// 2. ->Path Module System

const path = require("path");
// console.log(path.dirname('D:/Tops/Theory/Node/Other/Practice/node_module.js')); //OR
// console.log(__dirname);
// console.log(path.extname('D:/Tops/Theory/Node/Other/Practice/node_module.js'));
// console.log(path.basename('D:/Tops/Theory/Node/Other/Practice/node_module.js'));
// console.log(path.parse('D:/Tops/Theory/Node/Other/Practice/node_module.js'));


// const mypath=path.parse('D:/Tops/Theory/Node/Other/Practice/node_module.js');
// console.log(mypath.name);
// console.log(mypath.base);
// console.log(mypath.dir);
// console.log(mypath.ext);
// console.log(mypath.root);


// const dirpath=__dirname
// const filepath=__filename
// const apppath=path.join(__dirname,"1nov.js")

// console.log(dirpath);
// console.log(filepath);
// console.log(apppath);


// 3.File Module System
const fs=require("fs");

/* writeFileSync -> this create new file if not exist,and if exist then remove old data and 
fill new data */

// fs.writeFileSync("text.txt","hello world");
// fs.writeFileSync("text.txt","hello world hello");

// fs.appendFileSync("text.txt"," 2.hello world");

// buffer -> use to store binary data

// const buff_data = fs.readFileSync("text.txt","utf-8");
// console.log(buff_data);  
//OR
// const buff_data = fs.readFileSync("text.txt");
// console.log(buff_data.toString());

// -> Rename File
// fs.renameSync("text.txt","read.txt");

// -> For make directory
// fs.mkdirSync("hello")

// -> For remove file from directory
// fs.unlinkSync("11nov.js")

// ->To know file is exist or not
// console.log(fs.existsSync("14nov.js"));
// console.log(fs.existsSync("ashok.js"));


// ************************Async*************************

// fs.writeFile("read.txt","it is ok",(err)=>{
//     console.log("file created");
//     console.log(err);
// });

// fs.appendFile("read.txt","in append it is ok",(err)=>{
//       console.log("task complete");
//       console.log(err);
// })


//  -> In Read there is 2 parameter is compulsury
// fs.readFile("read.txt","utf-8",(err,output)=>{
//     console.log(output);
//     console.log(err);
// })

// fs.readFile("text.txt","utf-8",(err,data)=>{
//     // if (err) {
//         console.log(err);
//         // return;
//     // }
//     console.log(data);
// })


// ********************(Sync-Async)*****************************
// const data=fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("Read Sync");


// fs.readFile("text.txt","utf-8",(err,data1)=>{
//     console.log(data1);
// })
// console.log("Read A-sync");



// -> Callback Function-Any function that is passed as an argument is call..





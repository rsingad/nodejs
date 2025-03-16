const fs = require("fs");
console.log("file system module");

//non blocking excution 
// fs.readFile("file.txt", "utf8", (err, data) => { console.log("error:",err,"\nfiledata:",data) })
// console.log("close file")
//blocking excution ya syncrons excution
const r=fs.readFileSync("file.txt");
console.log(r);
console.log(r.toString());//string formate
console.log("blocking excution");


//write file 
fs.writeFile("file.txt","ramesh singad",()=>{
    console.log("write to the file");
})

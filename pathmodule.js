const path = require("path");

console.log("ram");
const one=path.basename('C:\\temp\\myfile.html');//basename 
console.log(one);
const two=path.dirname('C:\\temp\\myfile.html');//directory name  
console.log(two);
console.log(process.env.PATH,"\n");
const ax=process.env.PATH.split(path.delimiter);
console.log(ax)

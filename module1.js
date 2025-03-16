// const sum=require("./module2.mjs");mjs file ke sath require use nhi hota

// import {sum,name,main} from "./module2.mjs";
// sum();
// name();
// main();
import * as module2 from './module2.mjs';
module2.sum();
module2.main();
module2.name();
console.log("module 1 is  run")
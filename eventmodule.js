import { EventEmitter } from 'events';


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log("tank is full");
  setTimeout(()=>{
    console.log("please turn off moter")
  },3000);
});
console.log("running code....");
myEmitter.emit('waterFull');
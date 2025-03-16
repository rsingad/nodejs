//my website server 
//#my confustion...
//1. agr ham html file ke variabe ko toString me conver nhi kre to vo kis forment me hoga 
//2.without toString() bhi proper work krta hai to mai eska use q kru?
const  fs = require("fs");
const http=require("http");

const port= process.env.PORT ||5000;



const indexpage=fs.readFileSync("index.html");
const home=fs.readFileSync("home.html");
const about=fs.readFileSync("about.html");
const skill=fs.readFileSync("skill.html");
const projects=fs.readFileSync("project.html");

const server=http.createServer((req,res)=>{
    console.log("server start");
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    if(req.url=="/"){
    res.statusCode=200;
        res.end(`${indexpage}
        ${home}
        ${about.toString()}
        ${skill.toString()}
        ${projects.toString()}
        `);
    } 
    else if(req.url=="/about"){
    res.statusCode=200;

        // res.end("<h1>about page</h1>")
        res.end(`${indexpage.toString()}${about.toString()}`);

    }else if(req.url=="/skill"){
    res.statusCode=200;

        // res.end("<h1>skilll page</h1><p>html ,css ,javascript ,bootstrap,nodejs, expressjs, mongodb, kali linux, dark web....</p>")
        const skill=fs.readFileSync("skill.html");
        res.end(`${indexpage.toString()}${skill.toString()}`);
    }else if(req.url=="/projects"){
    res.statusCode=200;

    // res.statusCode=200;

        res.end(`${indexpage.toString()}
                ${projects.toString()}
            `)
    }
    else{
        res.statusCode=404;
        res.end(`
           <h1>404</h1> 
           <p>somthing wrong...</p>
            `)

    }
});
server.listen(port,()=>{
    console.log(`server is listen on localhost:${port}`);
});
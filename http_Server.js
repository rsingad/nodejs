const http=require("http");
const port=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    // console.log(req);
    // console.log(res);
    // console.log(req.url);
    
    res.statusCode=200;
    res.setHeader('content-Type','text/html');//ye hame baatata hai ki data  client ki kis formate me send krna hai
    res.end("<h1>hello miss cutee</h1><p>thank you for visting my page</p>")

});
server.listen(port,()=>{
    console.log(`server is listening on port localhost:${port}`);
});
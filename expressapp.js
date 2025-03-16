const express=require("express");//import express

const app=express();

const port=3000;

app.get("/",(req,res)=>{
    res.send("hellow world");
});
app.get("/about",(req,res)=>{
    res.send("about responce");
});
app.listen(port,()=>{
    console.log(`app listning on port ${port}`);
})
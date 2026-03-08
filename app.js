const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("DevOps Assignment Running");
});

app.get("/add",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({result:a+b});
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
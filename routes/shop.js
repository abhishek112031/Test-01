const express=require('express');
const shopRoute=express.Router();
const path=require('path');


shopRoute.get('/',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'..','views-styling','shop.html'))
});

shopRoute.get('/success',(req,res,next)=>{
    
    res.send("Form successfuly filled");
});


module.exports=shopRoute;
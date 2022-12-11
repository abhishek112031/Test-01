const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path');


router.get('/add-product',(req,res,next)=>{
   
    res.sendFile(path.join(rootDir,'views-styling','add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views-styling','contactus.html'));
})

router.post('/contactus',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/success')
})

module.exports=router;




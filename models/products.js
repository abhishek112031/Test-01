
const path=require('path');
const fs=require('fs');
const rootDir = require('../util/path');




module.exports=class Product{
    constructor(title,productUrl,productPrice,productDescription){
        this.title=title;
        this.productUrl=productUrl;
        this.productPrice=productPrice;
        this.productDescription=productDescription;
    }

    save(){
        
        const p=path.join(rootDir,'data','products.json');
        fs.readFile(p,(err,contents)=>{
            let products=[];//2.datas will come  as an object form from-->postAddProduct middleware..store here
            if(!err){
                products=JSON.parse(contents);
            }
            //if we dont create file for the first time--->err
            products.push(this);//1.each data comes as an object form from-->postAddProduct middleware..
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
            })
            console.log("save-func--->>",products);


        });
       
    }

    static fetchAll(cb){
        const p=path.join(rootDir,'data','products.json');
        fs.readFile(p,(err,contents)=>{
            if(err){
                cb([]);
            }
           cb(JSON.parse(contents));
        })
    }
}
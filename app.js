// const http=require('http'); dont need while using express frameworks.
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

//express application storing in a constant :
const app=express();


const adminRoute=require('./routes/admin');
const shopRoute=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname,'public')));//linking css file


app.use('/admin',adminRoute);
app.use(shopRoute);

//for not found page:
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views-styling','404Status.html'))
})


// const server=http.createServer(app);
// server.listen(3000);
// other method to listen port/creating server:

app.listen(3000);


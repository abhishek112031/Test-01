const rootDir = require('../util/path');
const path=require('path');



exports.getContact=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
}

exports.postContact=(req,res)=>{
    // console.log(req.body);
    res.redirect('/success');

}
const rootDir = require('../util/path');
const path = require('path');

const Product=require('../models/products');

exports.getProduct = (req, res, next) => {
    Product.fetchAll((products)=>{//passing parameters in anonymous function;
          console.log('fetch-all',products);
    });
    
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

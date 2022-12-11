const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const getShopProductController=require('../controllers/shopProduct.js')

const router = express.Router();

router.get('/',getShopProductController.getProduct);

module.exports = router;

//const { format } = require('morgan');
var express = require('express');
var router = express.Router();
const database = require('../database/data');


const productsController = {
    index: function(req, res) {
        res.render('product', {data: database}) 

        
      }, 
    productAdd: function(req,res) {
      res.render('product-add')
    }
}

module.exports= productsController;

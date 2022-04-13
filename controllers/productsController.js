var express = require('express');
var router = express.Router();
const data = require('../database/data');


const productsController = {
    index: function(req, res) {
        res.render('product', {
          data: data.products, 
          comments: data.comments, 
          user: data.comments}) 
    },
    productAdd: function(req, res) {
      res.render('product-add', {data: data.products})
    }
}

module.exports= productsController;

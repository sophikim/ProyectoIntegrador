var express = require('express');
var router = express.Router();
let db = require("../database/models");
let product = db.Product;


const productsController = {
    index: function(req, res) {
     /*product.findAll()
      .then(function(Product){
        res.render('product', {
          product: Product,
          comments: Comments,
          user: User,
        })
        res.sent(Product) 
      }) */
      
    },
    productAdd: function(req, res) {
     /* res.render('product-add', {data: product.products}) */
    }
}

module.exports= productsController;

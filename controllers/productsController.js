var express = require('express');
var router = express.Router();
let db = require("../database/models");
let product = db.Product;


const productsController = {
    index: function(req, res) {
     product.findAll({
       include: [
         {association: "owner"},
         {association: "comments"}
       ]
     }).then(function(Product){
        res.render('product', {
          product: Product,
          comments: Comments,
          user: User,
        })
        res.sent(Product) 
      })
      
    },
    productAdd: function(req, res) {
      // if(!req.session.user){
      //   throw Error ('Not authorized')
      // }
     res.render('product-add') 
    }
}

module.exports= productsController;

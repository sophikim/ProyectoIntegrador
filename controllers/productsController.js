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
          products: Product,
          comments: Comments,
          user: db.User,
        });
      })
      .catch(function(error){
        res.send(error)
      });
    },
    show: function(req, res) {
      product.findByPk(req.params.id, {
        include: {all: true, nested:true}
      }).then(function(Product){
          console.log(Product.dataValues);
         res.render('product', {
           products: Product,
           comments: Comments,
           user: db.User,
         })
       })
       .catch(function(error){
         res.send(error)
       });
     },
    productAdd: function(req, res) {
      if(!req.session.user){
      throw Error ('Not authorized') 
      }
     res.render('product-add') 
    }, 
    storeAdd: function(req, res) {
      if (!req.session.user) { 
          return res.render('product-add', { error: 'Not authorized.' });
      } //si no incio sesion, no mostrar 
      req.body.id = req.session.user.id_user;
      if (req.file) req.body.cover = (req.file.path).replace('public', '');
      db.Product.create(req.body)
          .then(function() {
              res.redirect('/')
          })
          .catch(function(error) {
              res.send(error);
          })
  }
}

module.exports= productsController;

var express = require('express');
var router = express.Router();
let db = require("../database/models");
let product = db.Product;


const productsController = {
  index: function (req, res) {
    product.findAll({
        include: [{association: "owner"},
          {association: "comments"}
        ]
      }).then(function (Product) {
        res.render('product', {products});
      })
      .catch(function (error) {
        res.send(error)
      });
  },

  //SHOW NO SE SI ESTA DEL TODO BIEN, HAY ALGUN ERROR CON COMMENTS 
  show: function (req, res) {
    db.Product.findByPk(req.params.id, {
        include: {
          all: true,
          nested: true
        }
      }).then(function (products) {
        res.render('product', { products });
      })
      .catch(function (error) {
        res.send(error)
      });
  },

  // Funcionalidad de ADD 
  productAdd: function (req, res) {
    if (!req.session.user) {
      throw Error('Not authorized')
    }
    res.render('product-add')
  },
  storeAdd: function (req, res) {
    if (!req.session.user) {
      return res.render('product-add', {
        error: 'Not authorized.'
      });
    } 
    req.body.id_user = req.session.user.id_user; //poder identifcar quien esta cargando el producto
    if (req.file) req.body.picture_product = (req.file.path).replace('public', '');
    db.Product.create(req.body) 
      .then(function () {
        res.redirect('/')
      })
      .catch(function (error) {
        res.send(error);
      })
  },
  
  //Funcionalidad edit 
  edit: function (req, res) { 
    db.Product.findByPk(req.params.id_product) 
      .then(function (products) {
        res.render('product-edit', {
          products
        });
      })
      .catch(function (error) {
        res.send(error);
      })
  },
  update: function (req, res) {
    if (req.file) req.body.picture_product = (req.file.path).replace('public', '');
    db.Product.update(req.body, {
        where: {
          id_product: req.params.id_product ///no se si es id_product o solo id, creo q como esta esta bien igual
        }
      })
      .then(function (products) {
        res.redirect('/')
      })
      .catch(function (error) {
        res.send(error);
      })
  },

  //Funcionalidad comentarios
  comment: function(req, res) {
    if (!req.session.user) { 
        throw Error('Not authorized.')
    }
    // Set user from session user
    req.body.id_user = req.session.user.id_user;
    // Set product from url params
    req.body.id_product = req.params.id_product;
    db.Comment.create(req.body)
        .then(function() {
            res.redirect('/products/detail/' + req.params.id_product) //no se si products ahi esta bien 
        })
        .catch(function(error) {
            res.send(error);
        })
},
}

module.exports = productsController;
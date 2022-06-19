let db = require("../database/models");
var op = db.Sequelize.Op;
let product = db.Product //creo que esto lo podemos borrar, me da miedo igual jjajaja asiq por las dudas todavia no lo toco

var indexController = {
  index: function (req, res) {
    product.findAll({
      include: [{
        association: "owner"
      }]
    }).then(function (Product) {
      res.render('index', {
        products: Product,
      })
    }).catch(function (error) {
      res.send(error)
    });
  },
  searchResults: function (req, res) {
    db.Product.findAll({
        where: {
          [op.or]: [{
              name: {
                [op.like]: "%" + req.query.criteria + "%"
              }
            },
            {
              description: {
                [op.like]: "%" + req.query.criteria + "%"
              }
            }
          ]
        },
        include: [{
          association: 'owner'
        }]
      }).then(function (products) {
        res.render('search-results', {
          products
        });
      })
      .catch(function (error) {
        res.send(error)
      });
  },

}

module.exports = indexController;
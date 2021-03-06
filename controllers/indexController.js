let db = require("../database/models");
var op = db.Sequelize.Op;

var indexController = {
  index: function (req, res) {
    db.Product.findAll({
      include: [{
        association: "owner"
      }],
      order: [ ['id_product', 'DESC']]
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
let db = require("../database/models");
let product = db.Product

var indexController = {
  index: function(req, res) {
    product.findAll({
      include: [
        {association: "owner"}
      ]
    }).then(function(Product){
       res.render('index', {
         products: Product,
       })
     }) .catch(function (error) {
      res.send(error)
    });
  },
  searchResults: function (req, res) {
    // db.Product.findAll({
    //   where: [
    //     {name: { [op.like]: "%"+req.query.criteria+"%"}}
    //   ],
    //   include: [{ association: 'owner'}]
    // }).then(function(products){
    //   res.render('search-results', {products}) 
    // }).catch(function (error) {
    //     res.send(error)
    // });
  } //aca falta lo de los operadores (op)

}

module.exports = indexController;
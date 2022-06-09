let db = require("../database/models");
let product = db.Product

var indexController = {
  index: function (req, res) {
    res.render('index')
  },

  searchResults: function (req, res) {
    db.Product.findAll({
      where: [
        {name: { [op.like]: "%"+req.query.criteria+"%"}}
      ],
      include: [{ association: 'owner'}]
    }).then(function(products){
      res.render('search-results', {products}) 
    }).catch(function (error) {
        res.send(error)
    });
  } //COMO HACER EL SEARCH RESULTS */

}

module.exports = indexController;
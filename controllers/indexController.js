let db = require("../database/models");
let product = db.Product 

var indexController = {
    index: function(req,res) {
      db.Product.findAll()
        .then (function(Product){
            res.render('product', {product: Product})}
        ) }, 

        searchResults: function(req,res) {
           /* res.render('search-results', {products: database.products}) */
        } //COMO HACER EL SEARCH RESULTS */

}

module.exports = indexController;
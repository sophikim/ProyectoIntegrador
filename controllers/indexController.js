const database = require('../database/data');

var indexController = {
    index: function(req,res) {
        res.render('index', {products: database.products}) 
    },

    searchResults: function(req,res) {
        res.render('search-results')
    }
}

module.exports = indexController;

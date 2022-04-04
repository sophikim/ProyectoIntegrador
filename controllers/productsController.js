var productosSustentables = require ('../database');

const controller = {
    index: function(req, res) {
        res.render('index', { title: 'Products' });
      }, 
}

module.exports=productosSustentables;
var data = require('../database/data');

const usersController = {
    login: function(req,res){
        res.render('login', {user: data.user})
    },
    register: function(req,res){
        res.render('register', {user: data.user})
    },
    profile: function(req,res){
        res.render('profile', {user: data.user})
    },
    profileEdit: function(req,res){
        res.render('profile-edit', {user: data.user})
    },
}

module.exports = usersController;
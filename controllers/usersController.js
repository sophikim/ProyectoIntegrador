var users = require('../database/users');

const controller = {
    profile: function (req, res){
        res.render ('profile')
    },
    profileEdit: function (req, res){
        res.render ('profile-edit')
    }
}

module.exports = controller;
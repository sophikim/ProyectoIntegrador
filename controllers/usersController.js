var data = require('../database/data');

const controller = {
    profile: function (req, res){
        res.render ('profile')
    },
    profileEdit: function (req, res){
        res.render ('profile-edit', {
            user: data.user
        })
    }
}

module.exports = controller;
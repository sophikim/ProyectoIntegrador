//antes db era data 
const bcrypt = require('bcryptjs');
let db = require("../database/models");
let user = db.User

const usersController = {
        login: function (req, res) {
          /*  res.render('login', {
                user: data.user
            }) */
        },
        register: function (req, res) {
           /* res.render('register', {
                user: data.user
            }) */
        },
        create: function (req, res) {
            if (!req.body.username) {
                throw-Error('Falta completar nombre de usario.')
            }
            const hashedPassword = bcrypt.hashSync(req.body.password, 10);
            db.User.create({
                    username: req.body.username,
                    password: hashedPassword,
                    birthdate: req.body.birthdate,
                    dni: req.body.dni,
                    profile_photo: req.body.profile_photo,
                })
                .then(function () {
                    res.redirect('/');
                })
                .catch(function (error) {
                    res.send(error);
                })
        },
        profile: function (req, res) {
           /*
            res.render('profile', {
                products: data.products
            }) */
        },
        profileEdit: function (req, res) {
           /*
            res.render('profile-edit', {
                user: data.user
            })  */
        }
    };


    module.exports = usersController
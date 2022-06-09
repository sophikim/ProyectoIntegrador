//antes db era data 
const bcrypt = require('bcryptjs');
let db = require("../database/models");
let user = db.User

const usersController = {
        login: function (req, res) {
          res.render('login', {
                user: data.user
            })
        },
        authenticate: function(req, res, next) {
            db.User.findOne({ where: { username: req.body.username }})
                .then(function(user) {
                    if (!user) throw Error('User not found.')
                    if (hasher.compareSync(req.body.password, user.password)) {
                        req.session.user = user;
                        if (req.body.rememberme) {  
                            res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 7 })
                        }
                        res.redirect('/');
                    } else {
                        throw Error('Invalid credentials.')
                    }
                })
                .catch(function (err) {
                    next(err)
                })
        },
        logout: function(req, res){
            req.session.user = null;
            res.clearCookie('userId');
            return res.redirect('/');
        },
        register: function (req, res) {
           res.render('register', {
                user: data.user
            })
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
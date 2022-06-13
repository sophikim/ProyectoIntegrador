const bcrypt = require('bcryptjs');
let db = require("../database/models");

const usersController = {
        login: function (req, res) {
          res.render('login', { 
            title: 'Login' //esto no se si esta bien, porque ponemos esto
            })
        },
        authenticate: function(req, res, next) {
            db.User.findOne({ where: { username: req.body.username }})
                .then(function(user) {
                    if (!user) throw Error('User not found.')
                    if (hasher.compareSync(req.body.password, user.password)) {
                        req.session.user = user;
                        // if (req.body.rememberme) {  
                        //     res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 7 })
                        // }
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
                user: db.User
            })
        },
        create: async function (req, res) {
            console.log(req.body);
            try {
                if (!req.body.username) {
                    throw Error('Falta completar nombre de usario.')
                }
                console.log(req.body.password)
                if (req.body.password.length < 5) {
                    throw Error('Contraseña demasiado corta.')
                }
            } catch (error) {
                return res.send(error);
            }
            const hashedPassword = bcrypt.hashSync(req.body.password, 10);
            db.User.create({
                    username: req.body.username,
                    password: hashedPassword,
                    birthdate: req.body.birthdate,
                    dni: req.body.dni,
                    profile_photo: req.body.profile_photo
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
const bcrypt = require('bcryptjs');
let db = require("../database/models");
let errors = {}

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
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                    req.session.user = user;
                    if (req.body.remember) {  
                    res.cookie('userId', user.id_user, { maxAge: 1000 * 60 * 60 * 7 })
                    }
                    res.redirect('/');
                    } else {
                    throw Error('Invalid credentials.')
                 } 
                })
        },
        logout: function(req, res, next){
            req.session.user = null;
            res.clearCookie('userId');
            return res.redirect('/')
        },
        register: function (req, res) {
           res.render('register', {
                user: db.User
            })
        },
        create: async function (req, res) {
            if (req.file) req.body.profile_photo = (req.file.path).replace('public', '');
            try {
                if (req.body.username == "") {
                    errors.message = "Email no puede estar vacío."
                    res.locals.errors = errors;
                    return res.render('register')
                };
                if (req.body.username == db.User.findOne({ where: { username: req.body.username } })) {
                    errors.message = "Email existente."
                    res.locals.errors = errors;
                    return res.render('register')
                };
                if (req.body.dni.length != 8) {
                    errors.message = "Incorrecta cantidad de dígitos del DNI."
                    res.locals.errors = errors;
                    return res.render('register')
                };
                if (req.body.password.length < 5) {
                    errors.message = "La contraseña debe tener un mínimo de 5 carácteres."
                    res.locals.errors = errors;
                    return res.render('register')
                };
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
     
        profile: function(req, res) {
            db.User.findByPk(req.session.user.id_user, { include: [ { association: 'products' } ] })
                .then(function (user) {
                    res.render('profile', { user });
                })
                .catch(function (error) {
                    res.send(error)
                });
        },


        profileEdit: function (req, res) {
            db.User.findByPk(req.params.id)
            .then(function (users) {
             res.render('profile-edit', { users });
            })
            .catch(function (error) {
            res.send(error);
            })
        },
        update: function (req, res) {
            if (req.file) req.body.profile_photo = (req.file.path).replace('public', '');

            db.User.update(req.body, { where: { id_user: req.params.id } })
            
            .then(function(users) {
            res.redirect('/')
             })
            .catch(function(error) {
            res.send(error);
            })
        }
    };


    module.exports = usersController
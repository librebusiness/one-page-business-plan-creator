const { Router } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const authRouter = Router();

authRouter.get('/login', (req, res) => {
    res.render('auth/login');
});

authRouter.post('/login', (req, res) => {
    const email = req.body.email;
    if (email && req.body.password) {
        User.findOne({ email }).then(user => {
            bcrypt.compare(req.body.password, user.password).then(correct => {
                if (correct) {
                    res.redirect('/dashboard');
                } else {
                    res.render('auth/login', { errors: new Error('Bad password') });
                }
            }).catch(err => {
                res.render('auth/login', { errors: err });
            });
        }).catch(err => {
            res.render('auth/login', { errors: err });
        });
    } else {
        res.render('auth/login', { errors: new Error('No email or password provided') });
    }
});

authRouter.get('/signup', (req, res) => {
    res.render('auth/signup', { errors: null });
});

authRouter.post('/signup', (req, res) => {
    const email = req.body.email;
    if (email && req.body.password) {
        bcrypt.hash(req.body.password, 10).then((hash) => {
            const user = new User({ email, password: hash });
            user.save().then(() => {
                res.redirect('/login', 201);
            }).catch(err => {
                res.render('auth/signup', { errors: err });
            });
        }).catch(err => {
            res.render('auth/signup', { errors: err });
        });
    } else {
        res.render('auth/signup', { errors: new Error('No email or password provided') });
    }
});

module.exports = authRouter;
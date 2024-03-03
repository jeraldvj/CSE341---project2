const express = require('express');
const session = require('express-session');
const passport = require('passport');
const router = express.Router();

require('../extra/passport.js');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.use(session({ secret: 'cats' }));
router.use(passport.initialize());
router.use(passport.session());

router.get('/', (req, res) => {
    res.send('<a href="/auth/google">Autenticate with Google</a>');
});

router.get('/auth/google', 
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/auth/google/callback', 
    passport.authenticate('google', {
        successRedirect: '/welcome',
        failureRedirect: '/failure',
     })
);

router.get('/auth/failure', (req, res) =>{
    res.send('Something went wrong..');
});

router.get('/welcome', isLoggedIn, (req, res) =>{
    res.send(`Hello! ${req.user.displayName} <br>You logged in correctly`);
});

router.use('/', isLoggedIn, require('./swagger'));
router.use('/user', isLoggedIn, require('./user'));
router.use('/specialty', isLoggedIn, require('./specialty'));

router.get('/logout', (req, res) => {;
    req.session.destroy(err => {
        if (err) {
          res.status(400).send('Unable to log out')
        } else {
          res.send('Logout successful')
        }
      });
  });

module.exports = router;
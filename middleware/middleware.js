const cookieSession = require('cookie-session');
const e = require('express');

const ifNotLoggedin = (req, res, next) => {
    if(!req.session.isLoggedIn){
        return res.render('register');
    }
    next();
}

const ifLoggedin = (req,res,next) => {
    if(req.session.isLoggedIn){
        return res.redirect('/register');
    }
    next();
};

module.exports = {
ifLoggedin,
ifNotLoggedin
}

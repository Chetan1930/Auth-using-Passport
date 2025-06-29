const route=require('express').Router();
const User=require('../models/user');
const {login, register}= require('../controllers/authControllers');

route.get('/login',function(req,res){
    res.render('login');
})

route.post('/login', login);

route.get('/register',function(req,res){
    res.render('register');
})


route.post('/register',register );


module.exports =route;
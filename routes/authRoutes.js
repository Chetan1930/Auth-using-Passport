const route=require('express').Router();
const User=require('../models/user');

route.get('/login',function(req,res){
    res.render('login');
})


route.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    // Find user by email
    const userExist = await User.findOne({ email});

    console.log("ye aaya h ander se",userExist);
    if (!userExist) {
      throw new Error("User doesn't exist");
    }

    // Check password (plain match for now)
    if (userExist.password !== password) {
      throw new Error('Invalid password');
    }

    req.session.user = userExist._id;
    console.log('User logged in, session created:', req.session.user);
    // If login is successful
    res.redirect('/');
  } catch (err) {
    console.error('Error logging in user:', err.message);
    res.status(401).send('Login failed: ' + err.message);
  }
});


route.get('/register',function(req,res){
    res.render('register');
})


route.post('/register', async function (req, res) {
  try {
    console.log(req.body);

    const newUser = new User(req.body);
    await newUser.save();

    req.session.user = newUser._id;
    console.log('User logged in, session created:', req.session.user);
    res.redirect('/');
  } catch (err) {
    console.error('Error registering user:', err.message);
    res.status(500).send('Registration failed');
  }
});


module.exports =route;
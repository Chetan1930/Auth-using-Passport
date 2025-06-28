const route=require('express').Router();
const isAuthenticate = require('../middlewares/isauthenticated');


route.get('/',isAuthenticate,function(req,res){
    res.render("dashboard");

})

route.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
      return res.send('Error logging out');
    }
    res.redirect('/login');
  });
});


module.exports =route;
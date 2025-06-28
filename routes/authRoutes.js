const route=require('express').Router();

route.get('/',function(req,res){
    res.send("hn bhai fr se aa gya Auth wale page pr");
})


module.exports =route;
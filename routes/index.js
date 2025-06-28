const route=require('express').Router();

route.get('/',function(req,res){
    res.send("<h1>Welcome!! Appki Site chl rhi h , ab soch liye kya krna h <h1/>");
})


module.exports =route;
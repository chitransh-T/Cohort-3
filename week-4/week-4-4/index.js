const express = require("express");

const app = express();

function isOldEnoughMiddleware(req,res,next){
    const age =req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg: "you are not old enough"
        })
    }
}

app.use(isOldEnoughMiddleware);     // instead if individually calling middleware we can just call it once above all the endpoint for which we have to make it applicable

app.get("/ride1" , isOldEnoughMiddleware , function(req,res){     // we can individually call the middleware with each endpoint
    res.json({
        msg: "your ride1 is booked "
    })
})

app.get("/ride2" ,isOldEnoughMiddleware, function(req,res){
    res.json({
        msg: "your ride2 is booked "
    })
})

app.listen(3000)
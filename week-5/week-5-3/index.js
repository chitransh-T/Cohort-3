const express = require('express');
const app = express();

let requestcount = 0;



// middleware to check the Method and wht is the url
function loggerMiddleware(req,res,next){
    console.log("Method is" + req.method);
    console.log("Hostname is" + req.hostname);
    console.log("Request on" + req.url);
    console.log("Date&time is" + new Date());
    next();
}



// middleware to cout the request send to the endpoint 
function requestCountMiddleware(req,res,next){
     requestcount+= 1;
    // console.log(`the total request count is ${requestcount}`)
    next()
}

app.get("/sum", loggerMiddleware, requestCountMiddleware, function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans: a + b
    })
})

app.get("/multiply", loggerMiddleware, requestCountMiddleware, function(req,res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        ans: a * b
    })
})

// endpoint to check the request count
app.get("/checkreqcount" , function(req, res){
    res.json({
        TotalRequestCount : requestcount
    })
})
app.listen(3000);
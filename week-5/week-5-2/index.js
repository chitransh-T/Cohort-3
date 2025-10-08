const express = require('express');
const app = express()

app.get("/sum", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
       "sum": a+b
    })
})

app.get("/multiply", function(req,res){
     const a = req.query.a;
    const b = req.query.b;

    res.send({
       multiply: a*b
    })
})

app.get("/division", function(req,res){
     const a = req.query.a;
    const b = req.query.b;

    res.send({
       "division": a/b
    })
})

app.get("/subtract", function(req,res){
     const a = req.query.a;
    const b = req.query.b;

    res.send({
       "subtract": a-b
    })
})

app.listen(3000)
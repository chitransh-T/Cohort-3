// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

const express = require("express")

const app = express();
let requestCount = 0;


function requestCountMiddlewarwe(req,res,next){
    requestCount = requestCount + 1;
    next();
}

app.use(requestCountMiddlewarwe)

app.get("/user1" , function(req , res){
    res.status(200).json({
        msg: "you hit the user 1"
    })
})

app.get("/user2" , function(req , res){
    res.status(200).json({
        msg: "you hit the user 2"
    })
})

app.get("/requestCount" , function(req , res){
   res.send("request count = " + requestCount)
})

app.listen(3000)
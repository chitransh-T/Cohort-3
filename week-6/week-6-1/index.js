const express = require("express");
const app = express();


app.use(express.json());

const users = [];


app.post("/signup",function(req,res){
   
    const name = req.body.username;
    const password = req.body.password;

    users.push({
        name: name,
        password:password
    })

    res.status(200).json({
        msg:"you are registered"
    })
})

app.post("/signin",function(req,res){
     const name = req.body.username;
     const password = req.body.password;

   
   

})


app.listen(3000);
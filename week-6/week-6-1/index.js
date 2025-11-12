const express = require("express");
const app = express();
const JWT = require('jsonwebtoken');
const JWT_SECRET = "pass1212";
app.use(express.json());

const users = [];


// signup API
app.post("/signup",function(req,res){
   
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password:password
    })
        
    res.status(200).json({
        msg:"you are registered"
    })
})
// signin api
app.post("/signin",function(req,res){

    let foundUser = null;

     const username = req.body.username;
     const password = req.body.password;
    
    for(let i = 0 ; i<users.length;i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i];
        }
    }
      if(foundUser){
    const token = JWT.sign({
        username: username
    },JWT_SECRET);

    res.json({
        token: token
    })
   }else{
    res.status(404).send({
        msg: "Invalid Username or Password"
    })
   }

})


app.get("/me" , function(req,res){
    const token = req.headers.token;
    const decodededinfo = JWT.verify(token , JWT_SECRET)
    const username = decodededinfo.username;

    let getuser = [];                // to store the username ans password in this variable

    for(let i = 0 ; i<users.length;i++){
        if(users[i].username == username){
            getuser = users[i];
        }   
    }  
     if(getuser){
           res.send({
            username: getuser.username,
            password: getuser.password
            })
    }else{
        res.status(404).send({
          msg: "token invalid"
         })
     }    
})

app.listen(3000);






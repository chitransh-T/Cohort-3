const express = require("express");
const app = express();


app.use(express.json());

const users = [];


// signup API
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
// signin api
app.post("/signin",function(req,res){

    let foundUser = null;

     const name = req.body.username;
     const password = req.body.password;
    
    for(let i = 0 ; i<=users.length;i++){
        if(users[i].name == name && users[i].password == password){
            foundUser = users[i];
        }
    }
   if(foundUser){
    const token = generateToken();
    foundUser.token = token;
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
    let getuser = [];                // to store the username ans password in this variable

    for(let i = 0 ; i<=users.length;i++){
        if(users[i].token == token){
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
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
JWT_SECRET = "pass1212";
const cors = require("cors");

const users = [];
app.use(express.json());

// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/public/index.html")
// })
app.use(cors());

app.post("/signup" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.status(200).send({
        msg: "user are signed up"
    })
})

app.post("/signin" , function(req,res){
     const username = req.body.username;
     const password = req.body.password;

    let foundUser = null;

    for(let i=0; i<users.length;i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i];
        }
    }
    if(foundUser){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)

        res.json({
            token: token
        })
    }else{
        res.status(404).send({
            msg: "invalid username os password"
        })
    }

  
})

// this is the auth middleware which checks the logs in if its then hit the further endpoints
function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET)

    if(decodedData.username){
        req.username = decodedData.username;
        next();
    }else{
        res.json({
            msg: "you are not logged in"
        })
    }
}


app.get("/me", auth , function(req,res){

    let getUser = null;

    for(let i = 0; i<users.length;i++){
        if(users[i].username == req.username){
            getUser = users[i];
        }
    }

    if(getUser){
        res.send({
            username: getUser.username,
            password: getUser.password
        })
    } else {
        res.status(404).send({
            msg:"token invalid"
        })
    }
})

app.listen(3000);
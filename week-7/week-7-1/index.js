const express = require("express");
const {TodoModel , UserModel} = require("./db")
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:5qweMbXfjFMwCp9k@democluster.gs2nv4b.mongodb.net/Todo-DB")

const JWT_SECRET = "pass1212";
const app = express();
app.use(express.json());


app.post("/signup" , async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name =  req.body.name;

  await  UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        msg: "you are signed up"
    })
})

app.post("/signin" , async function(req,res){
     const email = req.body.email;
     const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
     })

     if(user){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)

        res.json({
            token: token
        })
     }else{
        res.send({
            msg: "invalid username and password"
        })
     }
})
function authMiddle(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.Id;
        next();
    }else{
        res.status(403).json({
            msg: "Incorrect credentials"
        })
    }  
}


app.post("/todo" , authMiddle, async function(req,res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
         userId: userId,
        title: title,
        done: done
    })

    res.json({
        msg: "todo created"
    })
})

app.get("/todos" ,authMiddle, async function(req,res){
     const userId = req.userId;
   
     const todos = await TodoModel.findOne({
        userId: userId
     })
    res.json({
       todos
    })
})

app.listen(3000);
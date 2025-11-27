    const bcrypt = require("bcrypt");
    const express = require("express");
    const {TodoModel , UserModel} = require("./db")
    const jwt = require("jsonwebtoken");
    const mongoose = require("mongoose")
    const { z } = require("zod");
    mongoose.connect("mongodb+srv://admin:5qweMbXfjFMwCp9k@democluster.gs2nv4b.mongodb.net/Todo-DB")
    const cors = require("cors")
    const JWT_SECRET = "pass1212";
    const authMiddle = require("./auth");
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.post("/signup" , async function(req,res){

    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(4).max(100),
        password: z.string().min(5).max(40)
    })

    const parsedDataWithSuccess = requireBody.safeParse(req.body)

    if(!parsedDataWithSuccess){
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }
        const email = req.body.email;
        const password = req.body.password;
        const name =  req.body.name;

        const hashedPassword = await bcrypt.hash(password , 5);

        await  UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        }) 
        
    })

    app.post("/signin" , async function(req,res){
        const email = req.body.email;
        const password = req.body.password;

        const user = await UserModel.findOne({
            email: email
        })
            if(!user){
                res.status(403).json({
                    message: "user does not exist"
                })
            }
            const passwordMatch = await bcrypt.compare(password, user.password);

        if(passwordMatch){
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

    // app.get("/todos" ,authMiddle, async function(req,res){
    //      const userId = req.userId;
    
    //      const todos = await TodoModel.findOne({
    //         userId: userId
    //      })
    //     res.json({
    //        todos
    //     })
    // })
    app.get("/todos", authMiddle, async function(req, res) {
        const userId = req.userId;

        const todos = await TodoModel.find({
            userId: userId
        });

        res.json(todos);   // ✅ return array directly
    });

 app.delete("/todo/:id" , authMiddle ,async function(req,res){
    const userId = req.userId;
    const todoId = req.params.id;

    const todo = await TodoModel.findOne({
        _id: todoId,
        userId: userId
    })
        if(todo){
            await TodoModel.deleteOne({_id: todoId,userId:userId })
            res.json({
                msg: "todo deleted"
            })
        }else{
            return res.status(404).json({
        msg: "Not allowed or Todo not found"
    });
        }

 })

    app.listen(3000);
  
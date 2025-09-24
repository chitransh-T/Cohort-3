const express  = require("express");
const app = express();

let todos= [] 
app.use(express.json())
app.post("/addtodo" , function(req,res){
    const data = req.body;
   
    const todo = {
        id: data.id,
        title: data.title
    }
  
 todos.push(todo)

  res.status(201).json({
    message: "Todo added successfully",
    todo
  })
})

app.get("/gettodo",function(req,res){
    res.send({
       todos: todos
    })
})

app.put("/edit/:id" , function(req,res){
   const id = parseInt(req.params.id);
   const newtodo = req.body.title

  const index = todos.findIndex(todo => todo.id === id);
  
  if (index !== -1) {
    todos[index].title = newtodo;

      res.status(203).json({
        message: 'todo has been edited',
        todo: todos[index]

      });
  }else{
    res.status(404).json({
        message: "todo not found"
    });
  }
})

app.delete("/delete/:id" , function(req,res){
   const id = req.params.id;
  const index = todos.findIndex(todo => todo.id === id);
 
  if (index !== -1) {
      const deletetodo = todos.splice(index,1)
      res.status(203).json({
        message: 'todo has been deleted',
        todo: deletetodo[0]
      });
  }else{
    res.status(404).json({
        message: "todo not found"
    });
  }
})

app.listen(3000);
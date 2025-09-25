const express = require("express")

const app = express();
app.use(express.json())
const users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}];


app.get("/" , function(req, res){
  let johnkidney = users[0].kidneys;
  let NoOfKidney = johnkidney.length;
  let noOfHealthyKidney  = 0 ;
  
  for(let i=0; i<johnkidney.length; i++){
    if(johnkidney[i].healthy){
        noOfHealthyKidney = noOfHealthyKidney + 1 ;
    }
  }
  const noOfUnhealthyKidney = NoOfKidney - noOfHealthyKidney;

  res.send({
    NoOfKidney,
    noOfHealthyKidney,
    noOfUnhealthyKidney

  })
})

app.post("/",  function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
    })
})

app.listen(3000)


app.put("/" , function(req,res){
  for(let i = 0 ; i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
  }
  res.send({})
})

app.delete("/", function(req,res){
let newkidney = [];
for(let i = 0 ; i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
      newkidney.push({
        healthy: true
      })
    }
  }
    users[0].kidneys = newkidney;
    res.json({msg: "done"})

})
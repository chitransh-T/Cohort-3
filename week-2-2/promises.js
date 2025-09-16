const fs = require ('fs')



// promisified version of the settiemout
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
function callback(){
    console.log("logging after 5 sec");
}

setTimeoutPromisified(5000).then(callback);



// the other way of creating the promises
const newpromise = new Promise(function (resolve , reject){
    setTimeout(function(){
        console.log("async promise 1")
        resolve();
    },1000)
})

newpromise.then(function(){
    console.log("promise run successfully")
})

// without creating the variable

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("without variable")
        resolve();
    })
}).then(function(){
    console.log("this is the without variable")
})


// passing the object with resolve

const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "chitransh"  , password: "123"})
        }else{
            reject("ERROR: Something Went Wrong")
        }
    },1000)
})

promise3.then(function(user){
    console.log(user);
})
.catch(function(err){
    console.log(err);
})

// lets do the .then chaining

const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "chitransh don"  , password: "12344"})
        }else{
            reject("ERROR: Something Went Wrong")
        }
    },1000)
})

promise4.then(function(user){
 console.log(user)
 return user.username;  // we have to pass the value buy rerturn then it go to below .then
})
.then(function(username){    // here it catch the returned value
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(()=>{
    console.log("either the promise is resolve or rejected")
})

// let use the async and await to get the value

const promise5 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "chitransh dada"  , password: "bhiya"})
        }else{
            reject("ERROR: Something Went Wrong")
        }
    },1000)
})

async function consumepromisefive(){            // when you use async and await syntax you should use the try and catch
        try{
            const responce  = await promise5
           console.log(responce)
        }catch(error){
            console.log(error)
        }
    
}

consumepromisefive()

// fetch the data using async and await syntax

async function getAllUsers(){
    try{
        const responce = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await responce.json()
        console.log(data)
    }catch(error){
        console.log("E." ,  error)
    }
}
getAllUsers();


// now writing the same function using the .then and .catch syntax

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(responce){
    return responce.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
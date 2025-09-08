

// assignment 1
function sum(a,b){
    return a+b;
}

let res = sum("dedee","t"); // try to pass the string as the paramter 
console.log(res);

// assignment 2

function canvote(age){
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}

let check = canvote(3);
console.log(check);


// array 

let users = ['aram' , 'ram', 'mohak', 'jay'];

for(let i = 0 ; i<users.length; i++){
    console.log(users[i]);
}

// objects 
// assignment 3 --> creating the fucntion which greet and take the user object as the parameter and based in gender put Mr and Mrs


function greet(user){
    if(user.gender=='male' ){
       console.log("hello Mr " + user.name + " your age is " + user.age);
    }
    else{
        console.log("hello Mrs " + user.name + " your age is " + user.age);
    }
    
}

let user = {
    name:'chitransh',
    age: 2,
    gender: 'male'
}

greet(user);


// assignment
// taking the array of object as the input and retuernr the object whiose age is 18 and he is male
function show(arr){
    let result = [];
    for(let j = 0; j<arr.length;j++){
        if(arr[j].gender === 'male' && arr[j].age > 18){
            result.push(arr[j]);
        }
    }
    return result;
}
let players = [{
    name: 'chitransh',
    age: 19,
    gender: 'male'
},{
    name: 'romi',
     age: 24,
     gender: 'female'
},{
     name: 'ajay',
     age: 12,
     gender: 'male'
}
];

let see = show(players);
console.log(see);
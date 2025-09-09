
const fs = require("fs"); // fs library to perform file operation (fs --> file system)
// in this file reading the things are going in the synchronous way
const content = fs.readFileSync("a.txt" , "UTF-8");
console.log(content);

const content2 = fs.readFileSync("b.txt" , "UTF-8");
console.log(content2);

// now we can se the things are going in the astnchronous way

function print(err, data){
    console.log(data)
}

fs.readFile("a.txt", "UTF-8" , print);     //second
fs.readFile("b.txt" , "UTF-8" , print);    // third
console.log("its done!!")                  // this will go first 



// passing the function as the functional argument 

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function subtract(a,b){
    return a-b;
}

function division(a,b){
    return a/b;
}

function doOperation(a,b,op){
    return op(a,b);
}

let res = doOperation(4,5,multiply);
console.log(res);

// let see how the tasks is being executed

console.log("first log");

console.log("second log");

function print3(){
    console.log("third log from the function")
}

setTimeout(print3 , 3000);

console.log("last")
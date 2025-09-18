

// slightly cleaner way from what we have done yesterady

function addTodo(){

    const value = document.querySelector("input").value;
    const spanEl= document.createElement("span");
    const buttonEl = document.createElement("button");
    spanEl.innerHTML = value;
    buttonEl.innerHTML ="Delete"
    const divEl = document.createElement("div");
  
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonEl);
    document.querySelector("body").appendChild(divEl);
}

// here we are doing the same thing wtih the state management
let todos= [];
function addTodo(){
    todos.push({
        title: document.querySelector("input").value
    })
    render();
}

function render(){
    document.querySelector("#todos").innerHTML = ""
    for(let i = 0; i<todos.length; i++){
        const todo = todos[i];
        const divel = document.createElement("div");
        const h1 = document.createElement("h1")
        const button = document.createElement("button")
        button.innerHTML = "delete todo"
        h1.innerHTML = todo.title;
        divel.appendChild(h1)
        divel.appendChild(button)
        document.querySelector("#todos").appendChild(divel);
    }
}
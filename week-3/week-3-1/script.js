function deletetodo(index){
const element = document.getElementById(index);
element.parentNode.removeChild(element)

}
    let ctr = 1;
function addTodo(){

    const element = document.querySelector("input")
    const value = element.value
    const divEl = document.createElement("div");
    divEl.setAttribute('id' , ctr)
  
    divEl.innerHTML ="<div>" + ctr +'. ' + value +'</div> <button onClick="deletetodo(' + ctr + ')">delete</button>'
    const parenetEl =   document.querySelector("body");
    parenetEl.appendChild(divEl);   
      ctr = ctr + 1;
}

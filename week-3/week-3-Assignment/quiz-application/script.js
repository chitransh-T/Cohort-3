
 const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},

]

const question = document.getElementById("question");
// console.log(question.textContent);

const option_a = document.getElementById("text_option-a");
// console.log(option_a.textContent)

const option_b = document.getElementById("text_option-b");
// console.log(option_a.textContent)

const option_c = document.getElementById("text_option-c");
// console.log(option_a.textContent)

const option_d = document.getElementById("text_option-d");
// console.log(option_a.textContent)

const submit = document.getElementById("submit");

const answerElement = document.querySelectorAll(".answer")

let currentque = 0;
let score = 0;

// console.log(quizData[currentque].question)        // to check the proper value on console
// console.log(quizData[currentque].a)
// console.log(quizData[currentque].b)
// console.log(quizData[currentque].c)
// console.log(quizData[currentque].d)

console.log("answer element" , answerElement)


question.textContent = quizData[currentque].question;
option_a.textContent = quizData[currentque].a;
option_b.textContent = quizData[currentque].b;
option_c.textContent = quizData[currentque].c;
option_d.textContent = quizData[currentque].d


submit.addEventListener("click" , () =>{
  const checkedAns = document.querySelector('input[type="radio"]:checked')
  //console.log(checkedAns)

  if(checkedAns === null){
    alert("please select any option")
  }else{
      // get the label next to the selected input
    const selectedLabel = checkedAns.nextElementSibling.textContent;

    // get the correct option text from quizData (not just "a"/"b")
    const correctText = quizData[currentque][quizData[currentque].correct];

    if (selectedLabel === correctText) {
      score++;
    }
      currentque++;
      if(currentque < quizData.length){
        question.textContent = quizData[currentque].question;
        option_a.textContent = quizData[currentque].a;
        option_b.textContent = quizData[currentque].b;
        option_c.textContent = quizData[currentque].c;
        option_d.textContent = quizData[currentque].d
        checkedAns.checked = false;
      }else{
        alert("your score is " + score +" out of " + quizData.length)
      }
  }
})
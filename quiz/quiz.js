const  quizDB =[
    {
        question: "Q1: What is the full form of HTML",
        a:"Hello To my Land",
        b:"Hey Text Markup Language",
        c:"HyperText Makeup Language",
        d:"Hypertext markup Language",
        ans: "ans4"
    },
    {
        question:"Q2: The content of the page (such as your pictures, text, links) will show up here",
        a:"Head" ,
        b:"Body",
        c:"Style",
        d:"Folder",
        ans:"ans2"
    },
    {
        question:"Q3:  What does CSS stand for?",
        a:"Colorful Style Sheet",
        b:"Creative Style Sheets",
        c:"Cascading Style Sheets",
        d:" Computer Style Sheets",
        ans:"ans3"
    },
    {
        question:"Q4: Which property is used to change the background colour?",
        a:"bgcolor",
        b:"back-color",
        c:"bcolor",
        d:"background-colour",
        ans:"ans4"
    },
    {
        question:"Q5:JavaScript files have the file extension (the bit after the name):",
        a:".js",
        b:" .css",
        c:".html",
        d:".java",
        ans:"ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;


const loadQuestion = () => {
const questionList =  quizDB[questionCount];

   question.innerText = questionList.question;
   
   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
   

}  



loadQuestion();

 const getCheckAnswer = () => {
    let answer; 
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

    });
    return answer;

 };

 const deselectAll = () => {
     answers.forEach((curAnsElem) => curAnsElem.checked = false );
 };
submit.addEventListener('click', () => {
   const checkedAnswer = getCheckAnswer();
   console.log(checkedAnswer);

   if(checkedAnswer ===  quizDB[questionCount].ans){
            score++;
   };
  
   questionCount++;
   

   deselectAll();

   if(questionCount < quizDB.length){
      loadQuestion(); 
   }
   else{
    showScore.innerHTML = `
    <h3> You Scored ${score}/${quizDB.length} </h3>
       <button class = "btn" onclick="location.reload()" > Play Again </button>
  ` ;
  showScore.classList.remove('scoreArea');
}


});

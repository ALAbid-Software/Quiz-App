const quizDB =[
    {
        question: "Q1: Inside which HTML element do we put the JavaScript?",
        a: "<javascript>",
        b: "<script>",
        c: "<js>",
        d: "scripting",
        ans: "ans2"
    },
    {
        question: "Q2: How do you write 'Hello World' in an alert box?",
        a: "alertBox('Hello World')",
        b: "alert('Hello World')",
        c: "msg('Hello World')",
        d: "msgBox('Hello World')",
        ans: "ans2"
    },
    {
        question: "Q3: Which of the following is a server-side Java Script object?",
        a: "Function",
        b: "File",
        c: "FileUpload",
        d: "Date",
        ans: "ans2"
    },
    {
        question: "Q4: How does Java Script store dates in objects of Date type?",
        a: "The number of days since January 1st, 1900",
        b: "The number of seconds since January 1st, 1970",
        c: "The number of milliseconds since January 1st, 1970",
        d: "The number of picoseconds since January 1st, 1970",
        ans: "ans3"
    },
    {
        question: "Q5: Which of the following is the tainted property of a window object in Java Script?",
        a: "Pathname",
        b: "Protocol",
        c: "Defaultstatus",
        d: "Host",
        ans: "ans3"
       
    },
     
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit  =  document.querySelector('#submit');

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{

    const questionList = quizDB[questionCount]

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();
   
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> Your Scored ${score}/${quizDB.length} ✌️</h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});



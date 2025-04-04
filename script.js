
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10"],
        answer: "8"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2", "H2O", "O2"],
        answer: "H2O"
    }
];

console.log(quizData[0].options[0]);

var next = document.querySelector("#next-btn");
var start = document.querySelector("#start-btn");
var ques = document.querySelector("#ques");
var timer = document.querySelector("#timer");
var liElem = document.querySelectorAll("ol li");


let currentQuestion = null;

 next.addEventListener("click",function(){

    var grow = 10

    var rndm = Math.floor(Math.random()*quizData.length);

    currentQuestion = quizData[rndm];

    ques.innerText = `${quizData[rndm].question}`;

    liElem[0].innerText = `${quizData[rndm].options[0]}`;
    liElem[1].innerText = `${quizData[rndm].options[1]}`;
    liElem[2].innerText = `${quizData[rndm].options[2]}`;

    liElem.forEach(option => {
        option.style.backgroundColor = ""; 
    });

    let interval =setInterval(() => {
        grow--;
        timer.innerText = `Time Left : ${grow}`;
    },600);
    
    setTimeout(()=>{
        clearInterval(interval);
        timer.innerText = `Time Over`;
    },6000)

    next.disabled = true;

})

start.addEventListener("click",function(){
     
    var rndm = Math.floor(Math.random()*quizData.length);

    currentQuestion = quizData[rndm];

    ques.innerText = `${quizData[rndm].question}`;

    liElem[0].innerText = `${quizData[rndm].options[0]}`;
    liElem[1].innerText = `${quizData[rndm].options[1]}`;
    liElem[2].innerText = `${quizData[rndm].options[2]}`;

    let interval = setInterval(() => {
        grow--;
        timer.innerText = `Time Left : ${grow}`;
    },100);
    
    setTimeout(()=>{
        clearInterval(interval)
        timer.innerText = `Time Over`;
    },1000)

    start.disabled = true;

})

let score = 0

liElem.forEach((option, index) => {
    option.addEventListener("click", function () {
        if (currentQuestion) {
            if (currentQuestion.answer === currentQuestion.options[index]) {
                option.style.backgroundColor = "green";
                score++;
        
            } else {
                option.style.backgroundColor = "red"; // Incorrect answer
            }
        }

        next.disabled = false;
    });
});

console.log(score);

 


const questions = [
    {
        questions: "Which is the largest animal in the world?",
        answers: [
            
                {text: "shark", correct: false},
                {text: "shark", correct: true},
                {text: "shark", correct: false},
                {text: "shark", correct: false},
            
            
        ]
    }

    {
        questions: "Which is the largest animal in the world?",
        answers: [
            
                {text: "shark", correct: false},
                {text: "shark", correct: true},
                {text: "shark", correct: false},
                {text: "shark", correct: false},
            
            
        ]
    }

    {
        questions: "Which is the largest animal in the world?",
        answers: [
            
                {text: "shark", correct: false},
                {text: "shark", correct: true},
                {text: "shark", correct: false},
                {text: "shark", correct: false},
            
            
        ]
    }

    {
        questions: "Which is the largest animal in the world?",
        answers: [
            
                {text: "shark", correct: false},
                {text: "shark", correct: true},
                {text: "shark", correct: false},
                {text: "shark", correct: false},
            
            
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
});
}
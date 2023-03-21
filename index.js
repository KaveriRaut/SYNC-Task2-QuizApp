const quizData = [
    {
        question: "JavaScript is considered as which side programming language?",
        a: "Client",
        b: "Server",
        c: "Both",
        d: "None",
        correct: "c",
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        a: "alertBox(“Hello DataFlair!”);",
        b: "alert(Hello DataFlair!);",
        c: "msgAlert(“Hello DataFlair!”);",
        d: "alert(“Hello DataFlair!”);",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What is the correct command to create a new React project?",
        a: "npx create-react-app appname",
        b: "npm install create-react-app",
        c: "npx install create-react-app -g",
        d: "install - l create-react-app",
        correct: "a",
    },
    {
        question: "What is the correct syntax to write an HTML comment?",
        a: "<!-- Comment-->",
        b: "// Comment",
        c: "# Comment",
        d: "/* Comment */",
        correct: "a",
    },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="history.go(0)">Play Again</button>
                ` // location.reload() won't work in CodePen for security reasons;
        }
    }
});
const quizData = [
    {
        question:'Welches dieser Lebensmittel hat Löcher?',
        a: 'Apfel',
        b: 'Milch',
        c: 'Käse',
        d: 'Honig',
        correct: 'c'
    }, {
        question: 'Wann ist Geisterstunde?',
        a: '00:00',
        b: '24:00',
        c: '12:00',
        d: '01:00',
        correct: 'a'
    }, {
        question: 'Welches Tier verspeißt mit der Nase gerne sein essen?',
        a: 'Taube',
        b: 'Schlange',
        c: 'Strauß',
        d: 'Nasenbär',
        correct: 'd'
    }  
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData [currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

} 
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
           answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

console.log(answer);

    if(answer) {
            if(answer === quizData[currentQuiz].correct) {
                score++;
            }

        currentQuiz++; 
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
           quiz.innerHTML = `<h2>Glückwunsch, du bist fertig und hast ${score}/${quizData.length} richtige Antworten.</h2>
           <button onclick ="location.reload()">Noch einmal</button>`;
        }  
    }
});
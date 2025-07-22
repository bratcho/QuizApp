const questionPool = [
  { question: "What is the capital of France?", answers: ["Berlin", "London", "Paris", "Madrid"], correct: 2 },
  { question: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 1 },
  { question: "Who wrote 'To Be, or Not To Be'?", answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], correct: 1 },
  { question: "What is 2 + 2?", answers: ["3", "4", "5", "2"], correct: 1 },
  { question: "Which ocean is the largest?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
  { question: "What is the boiling point of water?", answers: ["90°C", "100°C", "80°C", "120°C"], correct: 1 },
  { question: "Who painted the Mona Lisa?", answers: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correct: 2 },
  { question: "Which language is used for web apps?", answers: ["Python", "JavaScript", "C++", "Java"], correct: 1 },
  { question: "What is the largest mammal?", answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correct: 1 },
  { question: "Which country is known as the Land of the Rising Sun?", answers: ["China", "Japan", "Thailand", "India"], correct: 1 },
  { question: "What is the hardest natural substance?", answers: ["Gold", "Iron", "Diamond", "Silver"], correct: 2 },
  { question: "Who discovered gravity?", answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correct: 1 },
  { question: "Which gas do plants absorb?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
  { question: "What is the smallest prime number?", answers: ["0", "1", "2", "3"], correct: 2 },
  { question: "Which continent is the Sahara Desert in?", answers: ["Asia", "Africa", "Australia", "Europe"], correct: 1 },
  { question: "What is the main ingredient in guacamole?", answers: ["Tomato", "Avocado", "Onion", "Pepper"], correct: 1 },
  { question: "Who is the author of Harry Potter?", answers: ["J.K. Rowling", "J.R.R. Tolkien", "Stephen King", "Roald Dahl"], correct: 0 },
  { question: "Which instrument has keys, pedals, and strings?", answers: ["Guitar", "Piano", "Drum", "Flute"], correct: 1 },
  { question: "What is the chemical symbol for gold?", answers: ["Au", "Ag", "Gd", "Go"], correct: 0 },
  { question: "Which planet is closest to the sun?", answers: ["Venus", "Earth", "Mercury", "Mars"], correct: 2 },
  { question: "How many continents are there?", answers: ["5", "6", "7", "8"], correct: 2 },
  { question: "What is the tallest mountain in the world?", answers: ["K2", "Everest", "Kilimanjaro", "Denali"], correct: 1 },
  { question: "Which animal is known as the King of the Jungle?", answers: ["Tiger", "Lion", "Leopard", "Cheetah"], correct: 1 },
  { question: "What is the freezing point of water?", answers: ["0°C", "32°C", "100°C", "-10°C"], correct: 0 }
];

const QUESTIONS_PER_GAME = 8;
let questions = [];
let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('final-score');

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
  // Shuffle and pick a subset of questions
  questions = shuffleArray(questionPool).slice(0, QUESTIONS_PER_GAME);
  currentQuestion = 0;
  score = 0;
  startScreen.style.display = 'none';
  resultScreen.style.display = 'none';
  quizScreen.style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = '';
  q.answers.forEach((answer, idx) => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(idx);
    answersEl.appendChild(btn);
  });
  scoreEl.textContent = `Score: ${score}`;
}

function selectAnswer(idx) {
  if (idx === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.style.display = 'none';
  resultScreen.style.display = 'block';
  finalScoreEl.textContent = `Your score: ${score} / ${questions.length}`;
}

function restartQuiz() {
  startQuiz();
}

// Fisher-Yates shuffle
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
} 
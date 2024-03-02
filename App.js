// app.js
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
let score = 0;

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    // Add more questions as needed
];

function displayQuestions() {
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        
        q.options.forEach(option => {
            const optionElement = document.createElement('input');
            optionElement.type = 'radio';
            optionElement.name = `question${index}`;
            optionElement.value = option;
            optionElement.addEventListener('change', () => checkAnswer(index, option));
            
            const labelElement = document.createElement('label');
            labelElement.textContent = option;
            
            questionElement.appendChild(optionElement);
            questionElement.appendChild(labelElement);
        });

        quizContainer.appendChild(questionElement);
    });
}

function checkAnswer(questionIndex, selectedOption) {
    const currentQuestion = questions[questionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }
}

function submitQuiz() {
    resultContainer.textContent = `Your Score: ${score} out of ${questions.length}`;
}

// Display questions when the page loads
displayQuestions();

// variable to track remaining time
// variable to track scores
// variable for questions and answers in an array


// start button
// should start time and prompt questions
// need to cycle through the questions
// need to display possible answers as buttons

// need timer with 75 seconds on the clock that decrements by 1

// if answered correct need to add 1 point to score
// if answered incorrect need to decrement time by 5 seconds

// 


// declared variables
var timer = document.querySelector('.timer');
var startBtn = document.querySelector('.btn-lg');
var mainEl = document.querySelector('.main');
var scoreEl = document.querySelector('.scores');
var quizEl = document.querySelector('.content');
var answerShow = document.createElement('ul');
var questionEl = document.querySelector('.quizTitle');
var choiceEl = document.getElementById('quizChoice');
var correct = 'Correct!';
var wrong = 'Wrong!';
var seconds = 75;
var timeDec = 5;
var scores = 0;

// variable with array of objects to show questions and answers
var questionItems = [
    {
        question: 'A ______ operator is used to determine the difference between values or variables.',
        answers: ['Logical', 'Conditional', 'Comparison', 'Telephone'],
        correctIdx: 'Comparison',

    },
    {
        question: '',
        answers: [''],
        correctIdx: '',

    },
    {
        question: '',
        answers: [''],
        correctIdx: '',

    },
    {
        question: '',
        answers: [''],
        correctIdx: '',

    },
    {
        question: '',
        answers: [''],
        correctIdx: '',

    }



];





// on click event listener
startBtn.addEventListener('click', startGame);

function startGame() {
    // will hide button when game starts
    startBtn.style.visibility = 'hidden';
    // starts time at 75 seconds and decrements by 1 second
    var timerInterval = setInterval(function () {
        seconds--;
        timer.textContent = 'Time: ' + seconds;

        

        // stops time at 0
        if (seconds === 0) {
            clearInterval(timerInterval);
            // when time is up message displays
            timer.textContent = 'Times Up!'

        }

    }, 1000);
    // shows score
    scoreEl.textContent = 'Your Score: ' + scores;
    showQuestions();


}

// function to populate question content in the HTML
function showQuestions() {
    for(var i=0; i < questionItems.length; i++) 
   
    for (var i = 0; i < questionItems[0].answers.length; i++) {
        var createBtn = document.createElement('button');
        createBtn.textContent = questionItems[0].answers[i];
        createBtn.classList.add('answerBtn');
        choiceEl.appendChild(createBtn);
        
        
    }
    $('.answerBtn').click(function(e){
        console.log(e.target.innerText);
        console.log('click');
    }) 
    

    questionEl.innerHTML =  questionItems[0].question;


};

// if userinput = correctidx then add 1 point text "correct"
// if userinput does not = corrctidx then subtract 5 seconds text "incorrect"
// move on to next question 
// if text content of button is equal to correctidx then console.log correct
// jquery to add class to button, to identify buttons target class add click event, then run conditionals for the answer check
// e.target.text = 
// questionItems++

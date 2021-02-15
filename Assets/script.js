// variable to track remaining time
// variable to track scores
// variable for questions and answers in an array


// start button
    // should start time and prompt questions
    // need to cycle through the questions
    // need to display possible answers as buttons

// need timer with 75 seconds on the clock that decrements by 1

var timer = document.querySelector('.timer');
var startTime = document.querySelector('.btn-lg');

var seconds = 75;

function setTime() {
    // starts time at 75 seconds and decrements by 1 second
    
    var timerInterval = setInterval(function() {
      seconds--;
      timer.textContent = 'Time: ' + seconds;
      
        // stops time at 0
      if(seconds === 0) {
        
        clearInterval(timerInterval);
        
      }
  
    }, 1000);
  }


setTime();
// Getting the random number
let randomNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = randomNumber;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

// Event listner for again btn
document.querySelector('.again').addEventListener('click' , function(){
    score =20;
    randomNumber = Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent = 'Start guessing...'; 
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})


// Event listner for check btn
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    //Checking the conditions
    //When there is no guess/input
    if(!guess){
        // document.querySelector('.message').textContent = '⛔ No number';
        displayMessage('⛔ No number');

        //When the player wins
    }else if(guess === randomNumber){
        // document.querySelector('.message').textContent = '🎉 correct guess'; 
        displayMessage('🎉 correct guess');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width= '30rem';
        document.querySelector('.number').textContent = randomNumber;
        //updating the highscore
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //When the guess is hogh than the random number
    }else if(guess !== randomNumber){
        if(score > 1){
            displayMessage(guess > randomNumber ? '📈 Too high .....' : '🔻 Too low .....') ;
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the Game !!'
            document.querySelector('.score').textContent = 0;    
        }
    }
})
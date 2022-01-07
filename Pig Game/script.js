

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
//selecting buttons
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

//
let currentScore , activePlayer , score , playing;
const init = function(){
    currentScore = 0;
    activePlayer = 0;
    score = [0,0];
    playing = true;

    //Starting condition
    score0El.textContent =0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');

    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')

};

init();



//functions
const switchPlayer = function(){
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0
        activePlayer = activePlayer===1 ? 0 : 1;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

//
newBtn.addEventListener('click',init)


//Rolling dice
rollBtn.addEventListener('click',function(){
 //   if(playing){
        // 1 generating random number between 1 and 6 
        const random = Math.trunc(Math.random() * 6 )+1;
        
        //2. display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `/img/dice-${random}.png`;

        // 3. check for 1 if not 

        if(random !== 1){
            //add to current score
            currentScore += random;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
        }else{
            // switch the player
            switchPlayer();
            
        }
 //   }
})

//holding the score using hold button
holdBtn.addEventListener('click',function() {
  //  if(playing){
        // 1 add the current score to active players score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        // 2 check the players score >= 100
        if(score[activePlayer] >= 100){
            // finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        }else{
            //  to switch the player
            switchPlayer();
        }   
  //  }
})
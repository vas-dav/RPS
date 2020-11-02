
//made by Vasily Davydov
// 0 = rock, 1 = paper, 2 = scissors



// Randomizes the choice and shows player's and computer's selection
const buttons = document.querySelectorAll('.container button');
let compScoreDisplay = 0;
let playerScoreDisplay = 0;
let vicCount = [];
let x;
let y;
let z;

//Score variables
let compNum = document.querySelector(".ComputerScore");
let playerNum = document.querySelector(".PlayerScore");
let result = document.querySelector(".maintext");
const pHand = document.querySelector('#pHand');
const cHand = document.querySelector('#cHand');

//Play Section

buttons.forEach((button) => {
   button.addEventListener('click', () => {

      let random = Math.floor(Math.random() * 3);
      let computerVariant = ["Rock", "Paper", "Scissors"][random];


      pHand.src = 'Files/Rock.png';
      cHand.src = 'Files/Rock.png';
      buttons.forEach(button => button.disabled = true);
      animatehands();
      setTimeout(() => {


         pHand.src = 'Files/' + button.id + '.png';
         cHand.src = 'Files/' + computerVariant + '.png';
         buttons.forEach(button => button.disabled = false);

         //This controls who won and who lost
         // player choice rock


         if (button === buttons[0] && computerVariant === 'Paper') {
            console.log("Computer Wins");
            result.innerHTML = "Computer Wins"
            compScoreDisplay = compScoreDisplay + 1;
            compNum.innerHTML = compScoreDisplay;
            vicCount.push("c");

         } else if (button === buttons[0] && computerVariant === 'Scissors') {
            console.log("Player Wins");
            result.innerHTML = "You Won!"
            playerScoreDisplay = playerScoreDisplay + 1;
            playerNum.innerHTML = playerScoreDisplay;
            vicCount.push("p");
         } else if (button === buttons[0] && computerVariant === 'Rock') {
            console.log("It's a tie!");
            result.innerHTML = "Unfortunatelly, it's a tie"
            vicCount.push("t");
            // player choice paper           
         } else if (button === buttons[1] && computerVariant === 'Paper') {
            console.log("It's a tie!");
            result.innerHTML = "Unfortunatelly, it's a tie"
            vicCount.push("t");
         } else if (button === buttons[1] && computerVariant === 'Scissors') {
            console.log("Computer Wins");
            result.innerHTML = "Computer Wins"
            compScoreDisplay = compScoreDisplay + 1;
            compNum.innerHTML = compScoreDisplay;
            vicCount.push("c");
         } else if (button === buttons[1] && computerVariant === 'Rock') {
            console.log("Player Wins");
            result.innerHTML = "You Won!"
            playerScoreDisplay = playerScoreDisplay + 1;
            playerNum.innerHTML = playerScoreDisplay;
            vicCount.push("p");
            // player choice scissors       
         } else if (button === buttons[2] && computerVariant === 'Scissors') {
            console.log("It's a tie!");
            result.innerHTML = "Unfortunatelly, it's a tie"
            vicCount.push("t");
         } else if (button === buttons[2] && computerVariant === 'Rock') {
            console.log("Computer Wins");
            result.innerHTML = "Computer Wins"
            compScoreDisplay = compScoreDisplay + 1;
            compNum.innerHTML = compScoreDisplay;
            vicCount.push("c");
         } else if (button === buttons[2] && computerVariant === 'Paper') {
            console.log("Player Wins");
            result.innerHTML = "You Won!"
            playerScoreDisplay = playerScoreDisplay + 1;
            playerNum.innerHTML = playerScoreDisplay;
            vicCount.push("p");
         }
         let x = vicCount[vicCount.length - 1];
         let y = vicCount[vicCount.length - 2];
         let z = vicCount[vicCount.length - 3];

         if (x === "c" && y === "c" && z === "c") endgame();
         else if (x === "p" && y === "p" && z === "p") endgame();
         if (compScoreDisplay === 10) endgame();
         else if (playerScoreDisplay === 10) endgame();
      }, 300);
      console.log(vicCount);


   })


});


// Button Elements
const startTheGame = document.querySelector(".StartG");
const playscreen = document.querySelector(".game");
const endscreen = document.querySelector(".EndG");
//Game start Button
startTheGame.addEventListener('click', () => {

   startTheGame.style.display = 'none';
   playscreen.style.opacity = '100';
});
// endgame function
const endgame = () => {

   endscreen.style.display = 'flex';
   playscreen.style.opacity = '0';
   if (x === "c" && y === "c" && z === "c") {
      result.innerHTML = "Computer Won three times in a row!"
   } else if (x === "p" && y === "p" && z === "p") {
      result.innerHTML = "Player Won three times in a row!"
   };
   if (compScoreDisplay === 10) {
      result.innerHTML = "Computer Won with the score of 10 :("
   } else if (playerScoreDisplay === 10) {
      result.innerHTML = "Player Won with the score of 10!"
   };
};

// endgame button
endscreen.addEventListener('click', () => {
   endscreen.style.display = 'none';
   playscreen.style.opacity = '100';
   playerScoreDisplay = 0;
   compScoreDisplay = 0;
   vicCount = [];
   playerNum.innerHTML = playerScoreDisplay;
   compNum.innerHTML = compScoreDisplay;
   result.innerHTML = "Try Your Best!"
   pHand.src = 'Files/Rock.png';
   cHand.src = 'Files/Rock.png';
   console.log(playerScoreDisplay);
   console.log(compScoreDisplay);
});




//animation of the hands

const animatehands = () => {
   cHand.animate([
      { transform: 'scaleX(-1) rotate(0deg)' },
      { transform: 'scaleX(-1) rotate(40deg)' },
      { transform: 'scaleX(-1) rotate(0deg)' }
   ], { duration: 100, iterations: 3 });

   pHand.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(40deg)' },
      { transform: 'rotate(0deg)' }
   ], { duration: 100, iterations: 3 });



};




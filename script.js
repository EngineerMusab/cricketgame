
    // understanding 
    // score object will be created when it is undefined and it is parsing when it when it is created 
    // when game resets no function is called only program runs when any button clicked it will show score in local storage
    //when game resets it will again create the object score as it is undefined and use that score object stored in local storage and show score accordingy

    let score = JSON.parse(localStorage.getItem('Score')) || {
        win: 0,
        lost: 0,
        tie: 0,
      }
      function generateComputerChoice() {
        let randomNumber = Math.random() * 3;
        if (randomNumber <= 1) {
          return 'Bat';
        } else if (randomNumber <= 2) {
          return 'Ball';
        } else {
          return 'Stump';
        }
      }
  
      function getResult(userMove, computerMove) {
        if (userMove === 'Bat') {
          if (computerMove === 'Ball') {
            score.win++;
            return 'User won.';
          } else if (computerMove === 'Bat') {
            score.tie++;
            return `It's a tie`;
          } else if (computerMove === 'Stump') {
            score.lost++;
            return 'Computer has won';
          }
        } else if (userMove === 'Ball') {
          if (computerMove === 'Ball') {
            score.tie++;
            return `It's a tie`;
          } else if (computerMove === 'Bat') {
            score.lost++;
            return 'Computer has won';
          } else if (computerMove === 'Stump') {
            score.win++;
            return 'User won.';
          }
        } else {
          if (computerMove === 'Ball') {
            score.lost++;
            return 'Computer has won';
          } else if (computerMove === 'Bat') {
            score.win++;
            return 'User won.';
          } else if (computerMove === 'Stump') {
            score.tie++;
            return `It's a tie`;
          }
        }
      }
  
      function showResult(userMove, computerMove, result) {
        if(userMove == undefined || computerMove==undefined || result==undefined){
          document.querySelector('#myscore').innerText= 
          document.querySelector('#myscore').innerText= ` Score Reset Successfully 
          Wins:${score.win}
  Lost:${score.lost}
  Ties:${score.tie}
  `
        }
        else{
        document.querySelector('#myscore').innerText=`You have chosen ${userMove}. Computer choice is ${computerMove} and ${result}
        Score
  Wins:${score.win}
  Lost:${score.lost}
  Ties:${score.tie}
  `
  localStorage.setItem('Score', JSON.stringify(score));
        }
      }
  
      function playGame(userMove) {
        let computerChoice = generateComputerChoice();
        let resultMsg = getResult(userMove, computerChoice);
        showResult(userMove, computerChoice, resultMsg);
      }
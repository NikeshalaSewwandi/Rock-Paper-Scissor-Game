let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  tie: 0
      
};

      updateElement();

      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose';
          } else if (computerMove === 'paper') {
            result = 'You win';
          } else {
            result = 'Tie';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win';
          } else if (computerMove === 'paper') {
            result = 'Tie';
          } else {
            result = 'You lose';
          }

        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie';
          } else if (computerMove === 'paper') {
            result = 'You lose';
          } else {
            result = 'You win';
          }
        }

        if (result === 'You win') {
          score.wins += 1;
        } else if (result === 'You lose') {
          score.losses += 1;
        } else {
          score.tie += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `
          You
          <img src="images/${playerMove}-emoji.png" class="move-icon">
          <img src="images/${computerMove}-emoji.png" class="move-icon"> `;

        updateElement();
      }

      function updateElement() {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        if (randomNumber < 1/3) {
          return 'rock';
        } else if (randomNumber < 2/3) {
          return 'paper';
        } else {
          return 'scissors';
        }
      }
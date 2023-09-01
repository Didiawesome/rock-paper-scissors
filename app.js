const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')
const choiseBtns = document.querySelectorAll('.choiseBtn')
let player
let computer
let result

choiseBtns.forEach((button) =>
  button.addEventListener('click', () => {
    player = button.textContent
    computerTurn()
    playerText.textContent = `Player: ${player}`
    computerText.textContent = `Computer: ${computer}`
    resultText.textContent = `Result: ${checkWinner()}`
  })
)

function computerTurn() {
  const randomNum = Math.floor(Math.random() * 3) + 1

  switch (randomNum) {
    case 1:
      computer = 'Rock'
      break
    case 2:
      computer = 'Paper'
      break
    case 3:
      computer = 'Scissors'
      break
  }
}

function checkWinner() {
  if (player == computer) {
    return 'Draw'
  } else if (computer == 'Rock') {
    return player == 'Paper' ? 'You win!' : 'You lose!'
  } else if (computer == 'Paper') {
    return player == 'Scissors' ? 'You win!' : 'You lose!'
  } else if (computer == 'Scissors') {
    return player == 'Rock' ? 'You win!' : 'You lose!'
  }
}

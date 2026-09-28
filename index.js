var beats = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['scissors', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};
var choices = ['scissors', 'paper', 'rock', 'lizard', 'spock'];
var iconFor = {
  scissors: '#icon-scissors',
  paper: '#icon-paper',
  rock: '#icon-rock',
  lizard: '#icon-lizard',
  spock: '#icon-spock',
};

var score = 0;
var scoreValue = document.getElementById('scoreValue');

var choiceScreen = document.getElementById('choiceScreen');
var resultScreen = document.getElementById('resultScreen');

var userPick = document.getElementById('userPick');
var housePick = document.getElementById('housePick');
var userStage = document.getElementById('userStage');
var houseStage = document.getElementById('houseStage');
var verdictCol = document.getElementById('verdictCol');
var verdictText = document.getElementById('verdictText');

var revealTimer = null;
var verdictTimer = null;

function setPickVisual(el, choice) {
  el.classList.remove(
    'paper',
    'scissors',
    'rock',
    'lizard',
    'spock',
    'revealed',
  );
  var svg = el.querySelector('.inner svg');
  svg.innerHTML = '';
  if (choice) {
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', iconFor[choice]);
    svg.appendChild(use);
    el.classList.add(choice);
  }
}

function outcomeOf(user, house) {
  if (user === house) return 'tie';
  if (beats[user].indexOf(house) !== -1) return 'win';
  return 'lose';
}

function playRound(userChoice) {
  clearTimeout(revealTimer);
  clearTimeout(verdictTimer);

  var houseChoice = choices[Math.floor(Math.random() * choices.length)];

  setPickVisual(userPick, userChoice);
  userPick.classList.add('revealed');

  setPickVisual(housePick, null);
  housePick.classList.remove('revealed');

  userStage.classList.remove('pulse');
  houseStage.classList.remove('pulse');
  verdictCol.classList.remove('show', 'win', 'lose', 'tie');
  verdictText.textContent = '';

  choiceScreen.classList.remove('active');
  resultScreen.classList.add('active');

  revealTimer = setTimeout(function () {
    setPickVisual(housePick, houseChoice);
    housePick.classList.add('revealed');

    verdictTimer = setTimeout(function () {
      var outcome = outcomeOf(userChoice, houseChoice);
      if (outcome === 'tie') {
        verdictText.textContent = 'Tie';
      } else if (outcome === 'win') {
        verdictText.textContent = 'You win';
        score += 1;
      } else {
        verdictText.textContent = 'You lose';
        score = Math.max(0, score - 1);
      }
      scoreValue.textContent = score;
      verdictCol.classList.add('show', outcome);
      userStage.classList.add('pulse');
      houseStage.classList.add('pulse');
    }, 550);
  }, 650);
}

document.querySelectorAll('.choice-node').forEach(function (btn) {
  btn.addEventListener('click', function () {
    playRound(btn.getAttribute('data-choice'));
  });
});

document.getElementById('playAgainBtn').addEventListener('click', function () {
  clearTimeout(revealTimer);
  clearTimeout(verdictTimer);
  resultScreen.classList.remove('active');
  choiceScreen.classList.add('active');
});

var rulesModal = document.getElementById('rulesModal');
document.getElementById('rulesOpenBtn').addEventListener('click', function () {
  rulesModal.classList.add('open');
});
document.getElementById('rulesCloseBtn').addEventListener('click', function () {
  rulesModal.classList.remove('open');
});
rulesModal.addEventListener('click', function (e) {
  if (e.target === rulesModal) rulesModal.classList.remove('open');
});

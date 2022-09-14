let scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;

    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    if (dice !== 1) {
      roundScore += dice;
      document.getElementById(
        "pontuacao-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

// HOLD button
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.dispaly = "none";

      document
        .querySelector(".jogador-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".jogador-" + activePlayer + "-panel")
        .classList.remove("active");

      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  roundScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.getElementById("pontuacao-0").textContent = 0;
  document.getElementById("pontuacao-1").textContent = 0;
  document.querySelector(".jogador-0-panel").classList.toggle("active");
  document.querySelector(".jogador-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("pontuacao-0").textContent = "0";
  document.getElementById("pontuacao-1").textContent = "0";
  document.getElementById("name-0").textContent = "Jogador 1";
  document.getElementById("name-1").textContent = "Jogador 2";

  document.querySelector(".jogador-0-panel").classList.remove("winner");
  document.querySelector(".jogador-1-panel").classList.remove("winner");
  document.querySelector(".jogador-0-panel").classList.remove("active");
  document.querySelector(".jogador-1-panel").classList.remove("active");
  document.querySelector(".jogador-0-panel").classList.add("active");
}

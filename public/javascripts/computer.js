var player1 = {};
var player2 = {};
var gameOver = false;
var win1, win2;
var div = document.getElementsByClassName('cell');
var player = document.getElementById('player');
var computer = document.getElementById('computer');
var TwoPlayer = document.getElementById('TwoPlayer');

var filled = [];
var combos = [
  ["one", "two", "three"],
  ["four", "five", "six"],
  ["seven", "eight", "nine"],
  ["one", "four", "seven"],
  ["two", "five", "eight"],
  ["three", "six", "nine"],
  ["one", "five", "nine"],
  ["three", "five", "seven"]
];

function score() {
  for (var i = 0; i < combos.length; i++) {
    var first = combos[i][0];
    var second = combos[i][1];
    var third = combos[i][2];
    if (player1[first] * player1[second] * player1[third] === 8) {
      win1 = true;
    }
    if (player2[first] * player2[second] * player2[third] === 27) {
      win2 = true;
    }
  }
}

function clear() {
  for (var j = 0; j < div.length; j++) {
    div[j].innerHTML = "";
  }
  win1 = false;
  win2 = false;
  player.innerHTML = "player 1";
  filled = [];
  player1 = {};
  player2 = {};
};

var twoPlayer = function(e) {
    filled.push(e.currentTarget.id);
    if (player.innerHTML === "player 1") {
      if (e.currentTarget.innerHTML === "") {
        e.currentTarget.innerHTML = " X";
        player.innerHTML = "player 2";
        player1[e.currentTarget.id] = 2;
      }
    } else {
      if (e.currentTarget.innerHTML === "") {
        e.currentTarget.innerHTML = " O";
        player2[e.currentTarget.id] = 3;
        player.innerHTML = "player 1";
      }
    }
  score();
  if (win1) {
    alert("Player 1 kicked your ass!");
    clear()
    return win1;
  } else if (win2) {
    alert("Player 2 pwned your ass!");
    clear()
    return win2;
  } else if (filled.length === 9) {
    alert("Cat's Game! Click OK to start over.");
    clear()
    return null;
  }
}

var computerPlayer = function(e) {
  filled.push(e.currentTarget.id);
  if (e.currentTarget.innerHTML === "") {
    e.currentTarget.innerHTML = " X";
    player.innerHTML = "player 2";
    player1[e.currentTarget.id] = 2;
  }
  function randomize() {
    var random = Math.floor(Math.random()*div.length);
    if (div[random].innerHTML !== "") {
      randomize()
    }
    else {
      div[random].innerHTML = " O";
      player2[div[random].id] = 3;
      player.innerHTML = "player 1";
    }
  }
  if (gameOver !== true) {
    randomize();
  }
  score();
  if (win1) {
    alert("Player 1 kicked your ass!");
    clear()
    gameOver = true;
  } else if (win2) {
    alert("Player 2 pwned your ass!");
    clear()
    gameOver = true;
  } else if (filled.length === 9) {
    alert("Cat's Game! Click OK to start over.");
    clear()
    gameOver = true;
  }
}

function game(callback) {
  for(var i = 0; i < div.length; i++){
    div[i].addEventListener('click', callback, false);
  }
};

game(twoPlayer);

computer.onclick = function() {
  clear()
  for(var i = 0; i < div.length; i++){
    div[i].removeEventListener('click', game(twoPlayer), false);
  }
  TwoPlayer.setAttribute("checked", false);
  computer.setAttribute("checked", undefined);
  if (computer.checked) {
    game(computerPlayer)
  }
}

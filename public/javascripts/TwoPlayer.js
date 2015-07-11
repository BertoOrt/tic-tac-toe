TwoPlayer.onclick = function() {
  clear();
  for(var i = 0; i < div.length; i++){
    div[i].removeEventListener('click', game(computerPlayer), false);
  }
  TwoPlayer.setAttribute("checked", true);
  computer.setAttribute("checked", undefined);
  if (TwoPlayer.checked) {
    game(twoPlayer)
  }
}

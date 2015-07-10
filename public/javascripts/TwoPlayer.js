TwoPlayer.onclick = function() {
  clear();
  for(var i = 0; i < div.length; i++){
    div[i].removeEventListener('click', fill, false);
    console.log(div[i].id + " removed");
  }
  TwoPlayer.setAttribute("checked", true);
  computer.setAttribute("checked", false);
  if (TwoPlayer.checked) {
    game()
  }
}

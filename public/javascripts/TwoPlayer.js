TwoPlayer.onclick = function() {
  alert("changed");
  clear();
  // for(var i = 0; i < div.length; i++){
  //   div[i].removeEventListener('click', fill);
  // }
  TwoPlayer.setAttribute("checked", true);
  computer.setAttribute("checked", false);
  if (TwoPlayer.checked) {
    game()
  }
}

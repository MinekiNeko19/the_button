var timesPressed = 0;

function counter() {
  timesPressed++;
}

function buttonTask() {
  timesPressed++;
  // console.log(timesPressed);
  document.getElementById("count").innerHTML = timesPressed;

  var o = Math.floor(Math.random() * 1); // * number of fxns +1 made yes

  if (o == 0) {
    changeBGColor();
  }
}


function changeBGColor() {
  var r = Math.floor(Math.random()*256);  
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  document.body.style.backgroundColor = color;
}

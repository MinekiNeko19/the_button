let timesPressed = 0;

function counter() {
  timesPressed++;
}

function buttonTask() {
  timesPressed++;
  // console.log(timesPressed);
  document.getElementById("count").innerHTML = timesPressed;

  const o = Math.floor(Math.random() * 1); // * number of fxns +1 made yes

  if (o == 0) {
    changeBGColor();
  }
}


function changeBGColor() {
  const r = Math.floor(Math.random()*256);  
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);

  let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  // putting 16 converts the string into hexadecimal version of the number

  document.body.style.backgroundColor = color;
  document.getElementById('color').innerHTML = color;
}

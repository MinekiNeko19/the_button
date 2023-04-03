function changeBGColor() {
  var r = Math.floor(Math.random()*255);  
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);

  let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  document.body.style.backgroundColor = color;
}
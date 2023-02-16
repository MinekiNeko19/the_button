function changeBGColor() {
  var r = Math.floor(Math.random()*255);  
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);

  let color = "#" + r.toString() + g.toString() + b.toString();

  document.body.style.backgroundColor = color;
}
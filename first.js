var Pika = document.getElementById("pika");
var PikaXVal = Number(Pika.getAttribute("x"));
var PikaYVal = Number(Pika.getAttribute("y"));

// randomNumber returns a random number between min and max
function randomNumber(min,max)
{
 return Math.floor(Math.random(0,800)*(max-min+1)+min);
}
document.addEventListener("keydown", function(e) {

  if (e.keyCode == 37) {
    Pika.setAttribute("x",PikaXVal - 15);
  PikaXVal = PikaXVal - 15;
  }

   else if (e.keyCode == 39) {
    Pika.setAttribute("x",PikaXVal + 15);
  PikaXVal = PikaXVal + 15;
  }

  else if (e.keyCode == 38) {
   Pika.setAttribute("y",PikaYVal - 15);
 PikaYVal = PikaYVal - 15;
}

else if (e.keyCode == 40) {
 Pika.setAttribute("y",PikaYVal + 15);
PikaYVal = PikaYVal + 15;
}

  var foodWidth = 20
  var foodHeight = 20
  var foodX = Number(document.getElementById("pokeball1").getAttribute("x"))
  var foodY = Number(document.getElementById("pokeball1").getAttribute("y"))

  if (PikaXVal > foodX && PikaXVal < foodX + foodWidth && PikaYVal > foodY && PikaYVal < foodY + foodHeight) {
    foodX = randomNumber(0, 800);
    foodY = randomNumber(0, 800);
    console.log("overlap");
  }

  foodX1 = Number(document.getElementById("pokeball2").getAttribute("x"))
  foodY1 = Number(document.getElementById("pokeball2").getAttribute("y"))


  if (PikaXVal > foodX1 && PikaXVal  < foodX1 + foodWidth && PikaYVal > foodY1 && PikaYVal < foodY1 + foodHeight)
  {
    foodX1 = randomNumber();
    foodY1 = randomNumber();
    console.log("overlap");
  }
})

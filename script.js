
// Create color array
var colors = [
   "rgb(255, 102, 51)",
   "rgb(51, 255, 204)",
   "rgb(204, 255, 51)",
   "rgb(255, 51, 204)",
   "rgb(209, 71, 255)",
   "rgb(0, 204, 153)"
];

var winColor = colors[3];
var squares = document.querySelectorAll(".square");
document.getElementById("winColorDisplay").textContent = winColor;

for (var i = 0; i < squares.length; i++) {
   // Set initial colors to squares
   squares[i].style.backgroundColor = colors[i];

   // Add click events to squares
   squares[i].addEventListener("click", function () {
      // Get color from click square
      var guessedColor = this.style.backgroundColor;
      console.log(guessedColor);
      console.log(winColor);
      // Compare to the correct color (winColor)
      if (guessedColor.replace(/\s/g, '') === winColor.replace(/\s/g, '')) //(Deleting whitespaces with regex)
         alert("Congrats you won!");

      else {
this.style.background = "#232323";
         alert("FALSE!");
      }
   });
}



console.log(typeof (winColor));
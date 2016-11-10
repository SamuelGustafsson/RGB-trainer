
// Create color array
var colors = [
   "rgb(255, 102, 51)",
   "rgb(51, 255, 204)",
   "rgb(204, 255, 51)",
   "rgb(255, 51, 204)",
   "rgb(209, 71, 255)",
   "rgb(0, 204, 153)"
];

var correctColor = colors[3];
var squares = document.querySelectorAll(".square");
var correctColorDisplay = document.getElementById("correct-color-display");
var messageDisplay

correctColorDisplay.textContent = correctColor;

for (var i = 0; i < squares.length; i++) {
   // Set initial colors to squares
   squares[i].style.backgroundColor = colors[i];

   // Add click events to squares
   squares[i].addEventListener("click", function () {
      // Get color from click square
      var guessedColor = this.style.backgroundColor;
      console.log(guessedColor);
      console.log(correctColor);
      // Compare to the correct color (correctColor)
      if (guessedColor.replace(/\s/g, '') === correctColor.replace(/\s/g, '')) //(Deleting whitespaces with regex)
         alert("Congrats you won!");

      else {
this.style.background = "#232323";
         alert("FALSE!");
      }
   });
}



console.log(typeof (correctColor));
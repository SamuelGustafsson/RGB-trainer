
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var correctColor = getCorrectColor();
var squares = document.querySelectorAll('.square');
var correctColorDisplay = document.getElementById('correct-color-display');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var playAgainBtn = document.getElementById('reset');
var resetButton = document.getElementById('reset');
var easyButton = document.getElementById('easy-mode-btn');
var hardButton = document.getElementById('hard-mode-btn');

correctColorDisplay.textContent = correctColor;

for (var i = 0; i < squares.length; i++) {
      // Set initial colors to squares
      squares[i].style.backgroundColor = colors[i];

      // Add click events to squares
      squares[i].addEventListener('click', function () {
            // Get color from click square
            var guessedColor = this.style.backgroundColor;

            // Compare to the correct color (correctColor)
            if (guessedColor.replace(/\s/g, '') === correctColor.replace(/\s/g, '')) { //(Deleting whitespaces with regex)
                  messageDisplay.textContent = 'Correct!';
                  changeColors(correctColor);
                  h1.style.background = correctColor;
                  playAgainBtn.textContent = 'Play again';
            }

            else {
                  // If player guesses wrong
                  this.style.background = '#232323';
                  messageDisplay.textContent = 'Wrong, try again!';
            }
      });
}

easyButton.addEventListener('click', function () {

      easyButton.classList.add('selected-mode');
      hardButton.classList.remove('selected-mode');

      numSquares = 3;
      colors = generateRandomColors(numSquares);
      correctColor = getCorrectColor();
      correctColorDisplay.textContent = correctColor;

      for (var i = 0; i < squares.length; i++) {
            if (colors[i]) {
                  squares[i].style.background = colors[i];
            }
            else {
                  squares[i].style.display = 'none';
            }
      }
});

hardButton.addEventListener('click', function () {
      hardButton.classList.add('selected-mode');
      easyButton.classList.remove('selected-mode');

      numSquares = 6;
      colors = generateRandomColors(numSquares);
      correctColor = getCorrectColor();
      correctColorDisplay.textContent = correctColor;

      for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = 'block';

      }
});

function changeColors(color) {
      // Change all squares to the given color
      for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = color;
      }
}

function getCorrectColor() {
      var randomNumber = Math.floor(Math.random() * colors.length);
      return colors[randomNumber];
}

function generateRandomColors(num) {
      // Create an array 
      var arr = [];

      // Add num random colors to array
      for (var i = 0; i < num; i++) {
            // Get random color and add to array
            arr.push(randomColor());
      }
      // Return array with random RGB colors 
      return arr;
}

function randomColor() {
      // Make a red color between 0 to 255
      var red = Math.floor(Math.random() * 255 + 1);
      // Make a green color between 0 to 255
      var green = Math.floor(Math.random() * 255 + 1);
      // Make a blue color between 0 to 255
      var blue = Math.floor(Math.random() * 255 + 1);

      return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

resetButton.addEventListener('click', function () {
      // Reload game with new colors from array to sqaures
      colors = generateRandomColors(numSquares);
      correctColor = getCorrectColor();
      correctColorDisplay.textContent = correctColor;
      for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
      }
      playAgainBtn.textContent = 'New colors';
      h1.style.background = '#232323';
});
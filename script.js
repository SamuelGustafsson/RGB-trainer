
var numSquares = 6;
var colors = [];
var correctColor;

var squares = document.querySelectorAll('.square');
var correctColorDisplay = document.getElementById('correct-color-display');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var playAgainBtn = document.getElementById('reset');
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll('.mode');

initGame();

function initGame(){
	// mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function(){
			modeButtons[0].classList.remove('selected-mode');
			modeButtons[1].classList.remove('selected-mode');
			this.classList.add('selected-mode');

		// Insted of if statment
			this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;

			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
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
}

function reset(){
	// Reload game with new colors from array to sqaures
	colors = generateRandomColors(numSquares);
	correctColor = getCorrectColor();
	correctColorDisplay.textContent = correctColor;
	messageDisplay.textContent = '';

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = 'none';
		}
	}
	playAgainBtn.textContent = 'New colors';
	h1.style.background = 'steelblue';
}


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
	reset();
});
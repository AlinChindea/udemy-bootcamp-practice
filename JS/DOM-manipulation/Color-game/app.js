let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();

    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener('click', function() {
      //grab color of clicked square and
      const clickedColor = this.style.backgroundColor;
      //compare it to picked color
      if(clickedColor === pickedColor){
        messageDisplay.innerHTML = '<i class="far fa-thumbs-up"></i> Correct!';
        resetButton.textContent = 'Play again?';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#c0c5ff';
        messageDisplay.innerHTML = '<i class="far fa-thumbs-down"></i> Try again';
      }
    });
  }
}

function reset(){
  //generate all new Colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
  //change colors of squares
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function(){
  reset();
});

function changeColors(color){
  //loop through all squares
  for(let i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  const randomColorsArray = [];
  //add num random colors to array
  for(let i = 0; i < num; i++){
    //get random color and push into array
    randomColorsArray.push(randomColor());
  }
  //return that array
  return randomColorsArray;
}

function randomColor(){
  //pick a 'red from 0 to 255'
  const red = Math.floor(Math.random() * 256);
  //pick a 'green from 0 to 255'
  const green = Math.floor(Math.random() * 256);
  //pick a 'blue from 0 to 255'
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

let numSquares = 6;
let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');


easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});
hardBtn.addEventListener('click', function(){
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }
});



resetButton.addEventListener('click', function(){
  //generate all new Colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = '#c0c5ff';
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener('click', function() {
    //grab color of clicked square and
    const clickedColor = this.style.backgroundColor;
    //compare it to picked color
    if(clickedColor === pickedColor){
      messageDisplay.textContent = 'Correct!';
      resetButton.textContent = 'Play again?';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#c0c5ff';
      messageDisplay.textContent = 'Try again';
    }
  });
}

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

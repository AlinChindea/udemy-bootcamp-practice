const colors = generateRandomColors(6);

const squares = document.querySelectorAll('.square');
const pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');

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
      changeColors(clickedColor);
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

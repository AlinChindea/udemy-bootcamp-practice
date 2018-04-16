const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 2555)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

const squares = document.querySelectorAll('.square');

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
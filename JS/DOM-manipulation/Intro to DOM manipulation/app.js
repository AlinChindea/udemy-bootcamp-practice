//ways to select the first <p> tag;
//querySelector HTML element
// const para1 = document.querySelector('p');
// const para7 = document.getElementsByTagName('p')[0];
// //getElementById('id')
// const para2 = document.getElementById('first');
// //querySelector CSS tag - id
// const para3 = document.querySelector('#first');
// //querySelector CSS tag - class name
// const para4 = document.querySelector('.special');
// const para5 = document.getElementsByClassName("special")[0]
// const para6 = document.querySelectorAll(".special")[0]
// const para8 = document.querySelectorAll("p")[0]
// //grab the first p tag after the h1
// const paraComplicated = document.querySelector('h1 + p');
//
// const button = document.querySelector('button');
// const paragraph = document.getElementById('clicked');
//
// button.addEventListener('click', changeButtonAndText);
//
// function changeButtonAndText() {
//   paragraph.textContent = 'Mayday! Someone clicked the button!';
//   button.style.background = 'dodgerblue';
//   button.textContent = 'Clicked!';
// }

const button = document.querySelector('button');
// let backgroundColor = false;

button.addEventListener('click', changeColor);

function changeColor() {
  document.body.classList.toggle('color');
  // if(backgroundColor){
  //   document.body.style.background = 'white';
  // } else {
  //   document.body.style.background = 'dodgerblue';
  // }
  // backgroundColor = !backgroundColor;
}

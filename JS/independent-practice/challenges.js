// 1. Turn a string into an array of words, using `String.split`:
// e.g. 'Hi there, my name is Mike' => ['Hi', 'there', 'my', 'name', 'is', 'Mike']`
const str = 'Hi there, my name is Mike';
console.log(str.split(' '));

// 2. Get `World` from the string `'Hello World!'` using `String.substr`:
// e.g `'Hello World!' => 'World'`
const hello = 'Hello World!';
console.log(hello.substr(hello.indexOf('World')));
// console.log(hello.substr(6));

// 3. Capitalize a word using a combination of `String.toUpperCase` and `String.substr`:
// e.g `roberto => 'Roberto'`
const name = 'roberto';
const capitalizedName = name.charAt(0).toUpperCase() + name.substr(1);
console.log(capitalizedName);
//
// 4. Convert a string to a number using `parseInt`
// e.g.`'12' => 12`
const string = '12';
const num = parseInt(string);
console.log(num);

// 5. Convert a decimal number to a string with 2 decimal places using `Number.toFixed`
// e.g. `15.827993 => '15.82'`
const number = 15.827993;
const convertedNumber = number.toFixed(2);
console.log(typeof(convertedNumber));

// 4. Join two arrays of strings using `Array.concat`.
// e.g.`['Mike', 'Emily'] ['Will', 'Ajay'] => ['Mike', 'Emily', 'Will', 'Ajay']`
const arr1 = ['Mike', 'Emily'];
const arr2 = ['Will', 'Ajay'];
const newArr = arr1.concat(arr2);
console.log(newArr);

// 5. Take an array of words and turn them into a string with pipes `|` between each word using `Array.join`.
// 	e.g.`['cloud', 'house', 'mountain', 'field'] => "cloud|house|mountain|field"`
const words = ['cloud', 'house', 'mountain', 'field'];
const wordsToString=words.join('|');
console.log(wordsToString);

// 6. Make a new array of the 2nd and 3rd elements of an array using `Array.slice`
// e.g. `['hippo', 'giraffe', 'lion', 'hyena'] => ['giraffe', 'lion']`
const animals = ['hippo', 'giraffe', 'lion', 'hyena'];
const animalsSliced = animals.slice(1,3);
console.log(animalsSliced);

// 7. Find the index of the word "pizza" in the following array with  `Array.indexOf`.
// e.g. `['salad', 'burger', 'pizza', 'soup'] => 2`
const arr = ['salad', 'burger', 'pizza', 'soup'];
console.log(arr.indexOf('pizza'));

// 8. Sum the contents on an array of numbers using `Array.reduce`.
// e.g `[1,2,3] => 6`
const sum = [1,2,3];
const reducer = (acc, num) => acc + num;
console.log(sum.reduce(reducer));

// 9. Take an array of strings and turn it into an array of numbers indicating the length of each string using `Array.map`.
// e.g.`['Los Angeles', 'New York', 'Huston'] => [11, 8, 6]`
const cities = ['Los Angeles', 'New York', 'Huston'];
const citiesNumbers = cities.map(city => city.length);
console.log(citiesNumbers);


// 10. Take an array of numbers and return only the ones that are divisible by 3. You will need `Array.filter` and the modulus `%` operator.
// e.g. [1,2,3,4,5,6,7,8,9,10] => [3,6,9]
const arrNumbers = [1,2,3,4,5,6,7,8,9,10];
const numbersDivisible = arrNumbers.filter(number => number % 3 === 0);
console.log(numbersDivisible);


// 11. Order an array of strings alphabetically with `Array.sort`.
// 	e.g.['Mohammed', 'Katheryn', 'Aaron', 'Amanda'] => ['Aaron', 'Amanda', 'Katheryn', 'Mohammed']
const originalArr = ['Mohammed', 'Katheryn', 'Aaron', 'Amanda'];
const sortedArr = originalArr.sort();
console.log(sortedArr);

// 12. Turn an array of numbers into an array of strings using `Array.map` and `Number.toString`
// e.g.[5,10,15,20,25] => ['5','10','15','20','25']
const numbers = [5,10,15,20,25];
const convertedToString = numbers.map(number => number.toString());
console.log(convertedToString);

// 13. Convert a phrase to title case, using `String.split`, `Array.map`, `String.toUpperCase`, `String.substr` and `Array.join`
// e.g.'the wind in the willows' => 'The Wind In The Willows'
// solution 1 - breaking it down
const phrase = 'the wind in the willows';
//turn string into array of words at the empty space
const phraseToArray = phrase.split(' '); // check console.log(phraseToArray);
//map over the array, capitalize each word in the array and return rest of the word as is
const arrayToUpperCase = phraseToArray.map((word) => {
  return `${word[0].toUpperCase()}${word.substring(1)}`;
}); // check console.log(arrayToUpperCase);
//join all elements of the array of words into a string
const titleCase = arrayToUpperCase.join(' ');
console.log(titleCase);

//solution 2 - one long method join
// const phrase = 'the wind in the willows';
// const titleCase = phrase.split(' ').map((word) => {
//   return `${word[0].toUpperCase()}${word.substring(1)}`;
// }).join(' ');
// console.log(titleCase);

//solution 3 - create a function
// const phrase = 'the wind in the willows';
// function titleCase(string) {
//   return string.split(' ').map((word) => {
//     return `${word[0].toUpperCase()}${word.substring(1)}`;
//   }).join(' ');
// }
//
// console.log(titleCase(phrase));

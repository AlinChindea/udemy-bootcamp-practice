//isEven 

// function isEven(num) {
//   //return true if even
//   if (num % 2 === 0) {
//   	return true;
//   }
//   //return false otherwise
//   else {
//   	return false;
//   }
// }

//isEven refactored - with a boolean statement

function isEven(num) {
  //return true if even
  return num % 2 === 0;
}

function factorial(num) {
	//define a result variable 
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 1; i <= num; i++) {
		result *= i;
	}
	//return the result variable
	return result; 
}

// function factorial(num) {
// 	if (num === 0) {
// 		return 1;
// 	}
// 	//define a result variable 
// 	var result = num;
// 	//calculate factorial and store value in result
// 	for(var i = num-1; i >= 1; i--) {
// 		result *= i;
// 	}
// 	//return the result variable
// 	return result; 
// }

// factorial(4) 4x3x2x1 

function kebabToSnake(str) {
	//replace all dashes with underscores
	var newStr = str.replace(/-/g, "_");
	//return str
	return newStr;
}
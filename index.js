// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// function reverseString(input){
//     let reverseStr= "";
//     for(let i= input.length-1; i>=0; i--){
//         reverseStr += input[i];
//     }
//     return reverseStr;
// }

// // Test this function
// // const inputString= "Hello World"
// const inputString= "Programming Hero"
// const result = reverseString(inputString);
// console.log(result);


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array

// function positiveNumbers(numbers){
//     let total = 0;
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] > 0){
//             total += numbers[i];
//         }
//     }
//     return total;
// }

// // Test this function
//  const arrayOfNumbers=  [2, -5, 10, -3, 7];
// //  const arrayOfNumbers= [20,10,-3450,560,-76,10];
//  const result = positiveNumbers(arrayOfNumbers);
//  console.log(result);


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 


// function frequentElement(arr) {
//     if (arr.length === 0) {
//         return null;
//     } //  if the array is empty then return null;

//     const frequencyMap = {};
//     let maxFrequency = 0;
//     let mostFrequentElement = arr[0];

//     arr.forEach(element => {
//         if (frequencyMap[element]) {
//             frequencyMap[element]++;
//         } else {
//             frequencyMap[element] = 1;
//         }

//         if (frequencyMap[element] > maxFrequency) {
//             maxFrequency = frequencyMap[element];
//             mostFrequentElement = element;
//         }
//     })
//     return mostFrequentElement;
// }

// // Test this function 
// const array = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 6, 6, 6, 78];
// const result = frequentElement(array)
// console.log(result);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.


// function findTwoNumbersSum(arr, target) {
//     const seenNumbers = {};

//     for (let i = 0; i < arr.length; i++) {
//         const complement = target - arr[i];

//         if (seenNumbers[complement] !== undefined) {
//             return [seenNumbers[complement], i];
//         }

//         seenNumbers[arr[i]] = i;
//     }

//     // If no pair is found, return an empty array
//     return [];
// }


// // Test the function with the example input
// const inputArray = [1, 3, 6, 8, 11, 15];
// const targetValue = 9;
// const result = findTwoNumbersSum(inputArray, targetValue);
// console.log(result); 



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the oper

// const calculator = (num1, num2, operator) => {
//     const operators = {
//       '+': (a, b) => a + b,
//       '-': (a, b) => a - b,
//       '*': (a, b) => a * b,
//       '/': (a, b) => {
//         if (b === 0) {
//           return "Error: Division by zero is not allowed.";
//         }
//         return a / b;
//       },
//     };
  
//     const operation = operators[operator];
  
//     if (!operation) {
//       return "Error: Invalid operator";
//     }
  
//     return operation(num1, num2);
//   };
  
//   // Test the calculator function
//   const num1 = 5;
//   const num2 = 0;
//   const operator = '/';
//   const result = calculator(num1, num2, operator);
//   console.log(result); 
  
// Task 6 Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

// function generatePassword(length) {
//     const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//     const numbers = '0123456789';
//     const specialCharacters = '!@#$%^&*()_-+=[]{}|:;"<>,.?/';
  
//     const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
//     let password = '';
  
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * allChars.length);
//       password += allChars[randomIndex];
//     }
  
//     return password;
//   }
  
//   // Test the function with a password length of 12
//   const passwordLength = 12;
//   const randomPassword = generatePassword(passwordLength);
//   console.log(randomPassword);
  


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


// function romanToInt(roman) {
//     const romanToIntegerMap = {
//       'I': 1,
//       'V': 5,
//       'X': 10,
//       'L': 50,
//       'C': 100,
//       'D': 500,
//       'M': 1000,
//     };
  
//     let result = 0;
  
//     for (let i = 0; i < roman.length; i++) {
//       const currentCharValue = romanToIntegerMap[roman[i]];
//       const nextCharValue = romanToIntegerMap[roman[i + 1]];
  
//       if (nextCharValue > currentCharValue) {
//         // If the next character has a greater value, subtract the current character value
//         result -= currentCharValue;
//       } else {
//         // Otherwise, add the current character value
//         result += currentCharValue;
//       }
//     }
  
//     return result;
//   }
  
//   // Test the function with Roman numerals
//   console.log(romanToInt("IXXX")); 
//   console.log(romanToInt("XXIV"));
  


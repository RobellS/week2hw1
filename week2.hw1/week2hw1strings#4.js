/* (Question #4) Make a calculator using switch/case and take a user input to perform any calculation. 
    If user enters any value other than 1-5, display a message 'Invalid Option' and end the program. */

let prompt1 =require('prompt-sync')()
let firstNum = parseInt(prompt1 ('Enter first number here: '))

let prompt2 =require('prompt-sync')()
let secondNum = parseInt(prompt2 ('Enter second number here: '))

let prompt3 =require('prompt-sync')()
let calc = prompt3 ('Type 1 to add,2 to subtract, 3 to multiply, 4 to divide, or 5 to exit: ')

switch (calc)
{
    // Addtion //
    case '1':
        console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`)
    break;
    // Subtraction //
    case '2':
        console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`)
    break;
    // Multiplication //
    case '3':
        console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)
    break;
    // Division //
    case '4':
        console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`)
    break;
    // Exit //
    case '5':
       console.log()
    break;
}
// (Question #1) Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome). //


let prompt= require('prompt-sync')()
let str = prompt('Enter Here: ')
let cursor = str.length -1

for (reverse =''; cursor>=0 ;cursor--)
{
    reverse+=(str.charAt(cursor))
}

if (str.toLowerCase()==reverse.toLowerCase())
{
    console.log (`${str} is a palindrome.`)
}
else
{
    console.log (`${str} is not a palindrome.`)
}


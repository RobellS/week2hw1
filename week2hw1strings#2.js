// (Question #2) Write a program to find how many letters, numbers, and special characters are in a user entered string. //


let prompt =require('prompt-sync')()
let str = prompt("Enter Here: ").toLowerCase()

let ltrcount= 0;
let numcount= 0;
let chrcount= 0;

for(i=0;i<=str.length; i++)

// IF letter unicode is 97-122, increment letter count //
if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
{
    ltrcount++
}
// IF ELSE number unicode is 48-57 increment numbe count //
else if (str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57)
{
    numcount++
}
// ELSE increment character count //
else{
    chrcount++
}
console.log (`Letter Count: ${ltrcount}`)
console.log (`Number Count: ${numcount}`)
console.log (`Character Count: ${chrcount}`)
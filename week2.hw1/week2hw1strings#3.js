//(Question # 3) Write a program to find how many times a user entered word occurs in given string.//

let prompt = require('prompt-sync')()
let input = prompt ('Enter Here: ')
let str = 'whejnrgohjwnewordljghnwordlej;kjh fldhjBFJLHBSDFLJHBAFhgnekjrngojerhgnworduh'
// let wordCount=0
// var reginput = "/" + input + "/g"
//let wordCount= (str.match(`/${input}/g`)).length
let re = new RegExp(`${input}`, 'gi');
let wordCount = str.match(re)
if (wordCount === null)
{
  console.log (`Total instances: 0`)
}
else
{
console.log (`Total instances: ${wordCount.length}`)
}
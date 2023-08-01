//create a simple server that listens 3000 and respond with "hello world" for all incoming http requests using express
const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send('Hello world!');
})
app.listen(3000, () => {
    console.log("server listing on port 3000")
})

//write a function in node js that takes array on integers as input and returns the sum of all the numbers
function sumArray(arr) {
    let sum = arr.reduce((a, b) => a + b) // reduce method to combine the all the elements in array
    return sum;
}
const myArray = [1, 2, 3, 4, 5];
const mySum = sumArray(myArray);
console.log(mySum);

// create a node js script that reads a text file named text data.txt and count number 
//of words in it. the script should print total words count in console
const fs = require('fs');
const filename = 'text_data.txt';
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;
  const wordCount = countWords(data);
  console.log(`The file "${filename}" contains ${wordCount} words.`);
});
function countWords(text) {
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
  }


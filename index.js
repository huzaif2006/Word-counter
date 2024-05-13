#! /usr/bin/env node
// A simple word counter created withh the help of typescrip and inquirer.
// import  inquirer from npm
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence to count the word.",
    },
]);
// use trim method to reduce white spaces and split method for convert string into array.
let words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is : ${words.length}`);

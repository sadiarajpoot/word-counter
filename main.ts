#! /usr/bin/env node
console.log("=".repeat(70));
console.log(chalk.bold.yellowBright("\n\t\t WELLCOME TO WORD COUNTER BY SADIA KHAN"));
console.log("=".repeat(70));


import inquirer from "inquirer";
import chalk from "chalk";

//from the user to  enter a sentence
let answers = await inquirer.prompt([{
	name: "sentence", type: "input", message: "Enter a sentence "
}
]);
//trimming the sentences and splitting it into words based on "space"
 
let words = answers.sentence.trim().split(" ");
//analysis of use input sentence
 
console.log("=".repeat(60));
console.log(chalk.bold("-sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count:${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));


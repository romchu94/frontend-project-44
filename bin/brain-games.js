#!/usr/bin/env node

import readlineSync from "readline-sync";

const showGreeting = () => console.log("Welcome to the Brain Games!");

const userGreeting = () => {
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
}

showGreeting();
userGreeting()



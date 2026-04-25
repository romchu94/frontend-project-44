import readlineSync from "readline-sync";
import {userGreeting} from "./cli.js";

const isEven = (number) => number % 2 === 0

const runEvenGame = () => {
    console.log("Welcome to the Brain Games!");
    const name = userGreeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * 100)
        console.log(`Question: ${number}`)
        const userAnswer = readlineSync.question('Your answer: ')

        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);

}


export default runEvenGame;
import readlineSync from "readline-sync";
import runGame from "../index.js";


const description = 'What is the result of the expression?'

const getRoundData = () => {
    const number1 = Math.floor(Math.random() * 100)
    const number2 = Math.floor(Math.random() * 100)
    const operators = ['+', '-', '*']
    const randomIndex = Math.floor(Math.random() * operators.length)
    const randomOperator = operators[randomIndex]
    const question = `${number1} ${randomOperator} ${number2}`

    let result;
    switch (randomOperator) {
        case '+' :
            result = number1 + number2;
            break;
        case '-' :
            result = number1 - number2;
            break;
        case '*' :
            result = number1 * number2;
            break;
        default:
            throw new Error(`Unknown operator: ${randomOperator}`);
    }

    return [question,String(result)]
}

export default () => runGame(description,getRoundData)
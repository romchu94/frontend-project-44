import getRandomNumber from "../utils.js";
import runGame from "../index.js";


const description = 'What is the result of the expression?'

const getRoundData = () => {
    const number1 = getRandomNumber()
    const number2 = getRandomNumber()
    const operators = ['+', '-', '*']
    const randomIndex = getRandomNumber(0, operators.length - 1)
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

    return [question, String(result)]
}

export default () => runGame(description, getRoundData)
import runGame from "../index.js";

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (a, b) => {
    let num1 = a
    let num2 = b
    while (num1 !== 0 && num2 !== 0) {
        if (num1 > num2) {
            num1 = num1 % num2
        } else {
            num2 = num2 % num1
        }
    }
    return num1 + num2
}

const getRoundData = () => {
    const number1 = Math.floor(Math.random() * 100) + 1
    const number2 = Math.floor(Math.random() * 100) + 1
    const question = `${number1} ${number2}`
    const correctAnswer = String(getGcd(number1, number2))

    return [question, correctAnswer]
}

export default () => runGame(description, getRoundData)


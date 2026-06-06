import getRandomNumber from "../utils.js";
import runGame from "../index.js";

const description = 'What number is missing in the progression?'

const getProgression = () => {

    const progressionLength = getRandomNumber(5, 10)
    const start = getRandomNumber(1, 10)
    const step = getRandomNumber(1, 10)
    const hiddenIndex = getRandomNumber(0, progressionLength - 1)
    const progression = []
    for (let i = 0; i < progressionLength; i += 1) {
        const currentNumber = start + i * step
        progression.push(currentNumber)
    }
    const correctAnswer = String(progression[hiddenIndex])
    progression[hiddenIndex] = '..'
    return [progression, correctAnswer]
}


const getRoundData = () => {
    const [progression, correctAnswer] = getProgression()
    const question = progression.join(' ')

    return [question, correctAnswer]
}

export default () => runGame(description, getRoundData)



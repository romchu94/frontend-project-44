import runGame from "../index.js";

const description = 'What number is missing in the progression?'

const getProgression = () => {

    const progressionLength = Math.floor(Math.random() * 6) + 5
    const start = Math.floor(Math.random() * 10) + 1
    const step = Math.floor(Math.random() * 10) + 1
    const hiddenIndex = Math.floor(Math.random() * progressionLength)
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



function atLeastTwoCharacters(text) {
    const letter = text.match(/[a-z]/gi) || []

    return letter.length >= 2
}


function abscence(text) {
    for (const character of text) {
        const occurrences = Array.from(text).filter(v => v == character).length
        if (occurrences >= 3) {
            return false
        }
    }
    return true
}

const checks = [atLeastTwoCharacters, abscence]

const textInput = document.querySelector('.text-input')
const wordCounter = document.querySelector('.word-count')
const letterCounter = document.querySelector('.letter-count')
const spaceCounter = document.querySelector('.space-count')

textInput.addEventListener('input', () => {
    const splitted = textInput.value.trim().split(/[\s-]/)
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length
    const spaceCount = (textInput.value.match(/\s+/g) || []).length

    let wordCount = 0

    outer:
    for(const text of splitted) {
        for (const check of checks) {
            if (!check(text)) {
                continue
            }
        }
        wordCount++
    }
    wordCounter.textContent = wordCount
    letterCounter.textContent = letterCount
    spaceCounter.textContent = spaceCount
})
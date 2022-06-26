const wordsTree = require("./words.json")

const db = {

}

//gets a random word by reading the words.json file
const getRandomWord = (node = wordsTree, letterList = []) => {
    const curLetters = Object.keys(node)

    if(node.end) {
        if(curLetters.length==1 || Math.random()<0.5){
            return letterList.join("")
        }   
    }

    let pickedLetter = "end"
    while(pickedLetter==="end"){
        pickedLetter = curLetters[Math.floor(Math.random()*curLetters.length)]
    }
    

    letterList.push(pickedLetter)

    return getRandomWord(node[pickedLetter], letterList)
}

//called when starting a new game. gets a random word and initialize the db json
const addNewEntry = (gid) => {
    db[gid] = getRandomWord()
}

//returns the length of the word of the current game
const getWordLength = (gid) => {
    return db[gid].length
}


const deleteEntry = (gid) => {

}

const getWordForGroup = (gid) => {
    return db[gid]
}

const checkGameStarted = (gid) => {
    if(db[gid]){
        return true
    }else {
        return false
    }
}

module.exports = {
    addNewEntry,
    getWordLength,
    getWordForGroup,
    checkGameStarted,
    deleteEntry
}
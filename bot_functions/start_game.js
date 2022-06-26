const { addNewEntry, getWordLength, getWordForGroup } = require("../datastore/store")

const startGame = async (msg) => {
    addNewEntry(msg.guildId)
    const len = getWordLength(msg.guildId)

    await msg.reply(`the word length is ${len}. guess the word! -> (${getWordForGroup(msg.guildId)})`)
}

module.exports.startGame = startGame
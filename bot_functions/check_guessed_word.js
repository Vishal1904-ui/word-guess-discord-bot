const { checkGameStarted, getWordForGroup } = require("../datastore/store")

const checkGuessedWord = async (msg,userWord) => {
    if(!checkGameStarted(msg.guildId)){
        await msg.reply("Game has not started yet. Please start the game with $startgame command.")
        return
    }

    const botWord = getWordForGroup(msg.guildId)
    const botSet = new Set(botWord.split(""))
    const replyList = [] 
    let flag = false
    
    for( let i=0; i<userWord.length;i++ ){
        if(botSet.has(userWord[i])){
            replyList.push(userWord[i])
        }else{
            flag = true
            replyList.push("*")
        }
    }

    if(!flag && botWord.length===userWord.length) msg.reply(`Congrats! ${msg.author.username} guessed correct. (${botWord})`)
    else  msg.reply(`${userWord} -> ${replyList.join("")}`)
    

}

module.exports.checkGuessedWord = checkGuessedWord
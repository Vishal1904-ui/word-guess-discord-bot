const  discord = require("discord.js")
const env = require("dotenv")

//custom function import
//const { test } = require("./bot_functions/test")
const { help } = require("./bot_functions/help")
const { startGame } = require("./bot_functions/start_game")

env.config()

const client = new discord.Client( { intents: ["DIRECT_MESSAGES","GUILD_MESSAGES","GUILDS"] } )

//msg -> content, guildId

client.on("ready",() => {
    console.log("Bot up and running")
})

client.on("messageCreate", async (msg) => {
    if(msg.author.bot) return

    if(msg.content.startsWith("$")){
        const [command,...args] = msg.content.split(" ")

        console.log(command,args)

        if(command==="$help"){
            await msg.reply(help())
        }else if(command==="$startgame"){
            startGame(msg)
        }
    }
})

client.login(process.env.BOT_TOKEN)
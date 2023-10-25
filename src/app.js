const {Bot} = require('grammy')
const config = require("../config")


const bot = new Bot(config.token)
const {translater}= require("./functions/functions")
const isAuth = require('./middleware/isAuth')
const isJoin = require('./middleware/isJoin')
const keyboard = require('./models/keyboards')


bot.command('start', async(ctx)=>{
   ctx.reply(`Assalomu aleykum ${ctx.from.first_name}! 
   Menga shunchaki matn kriting:`)
})
bot.use(isAuth)
// bot.use(isJoin)


bot.on("message:text", (ctx)=>{
   let  matn = ctx.message.text
    ctx.reply(translater(matn))
})

bot.catch((er)=>{
    console.log(er)
})


bot.start()






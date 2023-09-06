const keyboard = require("../models/keyboards");
const config = require("../../config")
const isJoin = async(ctx, next) =>{
    const userId = ctx.from.id;
    const data = await ctx.api.getChatMember(config.channel_id, userId)
    if(data.status == 'member' || data.status == 'creator')
        return next()
    console.log(data)

ctx.reply("Iltimos Bot ishlashi uchun kanalga a'zo bo'ling", {
    reply_markup:{
        ...keyboard
    }
})
    
}

module.exports = isJoin;
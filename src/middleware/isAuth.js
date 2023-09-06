const Io = require("../Io/Io")
const {v4: uuid} = require("uuid")
const io = new Io(process.cwd()+'/database/users.json')

const isAuth = async(ctx, next) =>{
    const telegramId = ctx.from.id 
    const Users = await io.read()
    
    let find_user = Users.filter((el)=> el.telegramId == telegramId)

    if(! find_user.length){
        const new_user = {
            id : uuid(),
            username : ctx.from.username, 
            telegramId: ctx.from.id
        }
     Users.length? io.write([...Users, new_user]): io.write([new_user])
    }

    next()
}


module.exports = isAuth;


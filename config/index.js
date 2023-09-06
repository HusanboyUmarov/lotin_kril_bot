require("dotenv/config")

const config  =  process.env;
module.exports ={
    token : config.TOKEN, 
    channel_id : config.channel_id
}
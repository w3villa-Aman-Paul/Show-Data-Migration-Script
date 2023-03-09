const { redisConfig } = require("../config/redis");
const redis = require('redis');
const redisHandler = require("../handlers/redisHandler");


module.exports = async function() {
    try {
        const keys = await redisHandler.getAllBullKeys();
        console.log("KEYS-->",keys.length);
        keys.forEach(async ele => {
            const success = await redisHandler.client.del(ele);
            console.log("Deleted: ",success,":",ele);
        });
        
    } catch (error) {
        console.log("Error in redisHandler: ",error);   
    }
}
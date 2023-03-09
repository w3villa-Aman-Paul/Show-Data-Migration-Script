const redisConfig = require('../config/redis');
module.exports.client = null

clients = {
    handler: redisConfig["client"]()
  };
  
clients.handler.connect(); // Handler Redis will be used to run Redis commands

this.client = clients.handler;

module.exports.getAllBullKeys = async function() {
    try {
        const key = "bull:*";
        const bullKeys = await this.client.KEYS(key);
        return bullKeys;
    } catch (error) {
        console.log("Error in getAllBullKeys: ", error);
    }
}

module.exports.deleteRedisKey = async function(key) {
    try {
        const deleteSuccess = await this.client.del(key);
        return deleteSuccess;
    } catch (error) {
        console.log("Error in deleteRedisKey: ", error);
    }
}
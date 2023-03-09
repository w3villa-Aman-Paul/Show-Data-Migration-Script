const redis = require('redis');
module.exports = {
  "local": {
    // config: {
    //   host: 'superone-game-eks-royale-0001-001.jlnwgb.0001.euw2.cache.amazonaws.com',
    //   port: '6379'
    // },
    config: {
      host: '127.0.0.1',
      port: '6379'
    },
    // config: {
    //   host: 'aa442f752ecf0457dba8e9140c5a2ac3-344391397.eu-west-2.elb.amazonaws.com',
    //   port: '6379'
    // },
    // config: {
    //   host: 'new-arch-001.jlnwgb.0001.euw2.cache.amazonaws.com',
    //   port: '6379'
    // },
  },
  "quick-dev1": {
    config: {
      host: '127.0.0.1',
      port: '6379'
    }
  },
  "quick-dev2": {
    config: {
      host: 'superone-game-royal.jlnwgb.ng.0001.euw2.cache.amazonaws.com',
      port: '6379'
    }
  },
  "quick-dev3": {
    config: {
      host: '127.0.0.1',
      port: '6379'
    }
  },
  "quick-dev4": {
    config: {
      host: '127.0.0.1',
      port: '6379'
    }
  },
  // "production": {
  //   config: {
  //     host: 'superone-game-royale-0001-001.jlnwgb.0001.euw2.cache.amazonaws.com',
  //     port: '6379'
  //   },
  // },

  client: function() {
    const nodeEnv = process.env.NODE_ENV || "local";
    try {
      const redisClient = redis.createClient(this[nodeEnv].config);
      redisClient.on('error', err => {
        console.log('redis not conneted ' + err);
      });
      redisClient.on('connect', res => {
        console.log('redis connected ' + res);
      });
      return redisClient;
    } catch(err) {
      console.log("Error while connecting redis : ", err)
    }
  }
}
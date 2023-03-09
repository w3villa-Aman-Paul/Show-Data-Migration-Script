const mysql = require('mysql');
const util = require( 'util' );

module.exports = {
    "local": {
        game: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev_game2'
        },
        affiliate: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev2'
        },
        local: {
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'quickdev_game2'
            }
        // game: {
        //     host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
        //     user: 'superone',
        //     password: 'superone_stage!',
        //     database: 'abhiload'
        // },
        // affiliate: {
        //     host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
        //     user: 'superone',
        //     password: 'superone_stage!',
        //     database: 'abhiload'
        // }
    },

    "production": {
        game: {
            host: 'royal-game-superone.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'admin',
            password: 'Super0neXyzXyz',
            database: 'superone_game_production'
        },
        affiliate: {
            host: 'superone-v3-prod.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superonev3',
            password: 'V3oidassV3oiDaSs',
            database: 'superonev3'
        }

    },

    "quick-dev1": {
        game: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev_game1'
        },
        affiliate: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev1'
        }
    },

    "quick-dev2": {
        game: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev_game2'
        },
        affiliate: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev2'
        }
    },
    "quick-dev3": {
        game: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev_game3'
        },
        affiliate: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev3'
        }
    },
    "quick-dev4": {
        game: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev_game4'
        },
        affiliate: {
            host: 'quickdev-cluster.cluster-cqg9f9ji0u3u.eu-west-2.rds.amazonaws.com',
            user: 'superone',
            password: 'superone_stage!',
            database: 'quickdev4'
        }
    },

    sqlConnGame: function() {
        const nodeEnv = process.env.NODE_ENV || "local";
        console.log('Connecting with ::::: ', nodeEnv);
        const connection = mysql.createConnection(this[nodeEnv].game);
        return {
          query( sql, args ) {
            return util.promisify( connection.query )
              .call( connection, sql, args );
          },
          close() {
            return util.promisify( connection.end ).call( connection );
          }
        };
    },

    sqlConnAffiliate: function() {
        const nodeEnv = process.env.NODE_ENV || "local";
        console.log('Connecting with ::::: ', nodeEnv);
        const connection = mysql.createConnection(this[nodeEnv].affiliate);
        return {
          query( sql, args ) {
            return util.promisify( connection.query )
              .call( connection, sql, args );
          },
          close() {
            return util.promisify( connection.end ).call( connection );
          }
        };
    },

    sqlConnLocal: function() {
        const nodeEnv = process.env.NODE_ENV || "local";
        console.log('Connecting with ::::: ', nodeEnv);
        const connection = mysql.createConnection(this[nodeEnv].local);
        return {
          query( sql, args ) {
            return util.promisify( connection.query )
              .call( connection, sql, args );
          },
          close() {
            return util.promisify( connection.end ).call( connection );
          }
        };
    }
}
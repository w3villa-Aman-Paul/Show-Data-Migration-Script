const Queue = require('bull');
const affiliateQueries = require("../queries/affiliate");
const redis = require('../config/redis');
const redisHandler = require('../handlers/redisHandler');

const getMigrateDataQueue = new Queue('migrationData', {
	redis: redis.local.config,
});

// Cleanly deletes redis record
const deleteRedisRecord = async (job) => {
    const searchQuery = "*:migrationData:" + job.id;
    redisHandler.client.keys(searchQuery, (err, reply) => {
        if (reply) {
            reply.forEach(async (el, i) => {
                await redisHandler.client.del(reply[i]);
            })
        }
    })
}


getMigrateDataQueue.process(async (job, done) => {
    try {
     console.log(`**************MIGRATION START JOB ID: ${job.id} ******************--->>>`);
	 const query = affiliateQueries.getTrueAndFalseCount(job.data.questionId);
        const trueFalseCount = await dbConnAffiliate.query(query);
        trueFalseCount[0].questionId = job.data.questionId;
        const insertQuery = affiliateQueries.insertQuestionStats(trueFalseCount[0].questionId, trueFalseCount[0].trueCount, trueFalseCount[0].falseCount);
     	await dbConnAffiliate.query(insertQuery);
		await deleteRedisRecord(job);
		done();
		console.log(`**************JOB ID: ${job.id} MIGRATION DONE******************--->>>`);
    } catch (e) {
        console.error(`Error while getting migration data ${job.data.questionId}: ${e}`);
		done(new Error(e));
	}
});

module.exports = { getMigrateDataQueue };


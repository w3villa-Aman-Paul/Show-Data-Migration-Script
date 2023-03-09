const migrateShowData = {};
const affiliateQueries = require("../queries/affiliate");
const getMigrateDataQueue = require('../queue/migrateDataQueue').getMigrateDataQueue;


migrateShowData.migrateShowData = async (req, res) => {
  try {
    console.log("In function migrateShowData");
    const questionIds = await migrateShowData.getDistinctQuestionIds();
    console.log(questionIds.length, questionIds[0].questionId);
     for(let i = 0; i < questionIds.length; i++) {
         await getMigrateDataQueue.add({
             questionId: questionIds[i].questionId,
            });
     }
  } catch (error) {
    console.log("Error in function migrateShowData: ", error);
  }
};

migrateShowData.getDistinctQuestionIds = async () => {
  try {
    console.log("In function getDistinctQuestionIds");
    const query = affiliateQueries.findDistinctQuestionIds();
    const distinctQuestionIds = await dbConn.query(query);

    return distinctQuestionIds;
  } catch (error) {
    console.log("Error in function getDistinctQuestionIds: ", error);
  }
};

module.exports = migrateShowData;

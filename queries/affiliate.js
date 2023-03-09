const appConstants = require("../config/appConstants.json");

module.exports = {

    findDistinctQuestionIds: () => {
        return 'SELECT distinct(questionId) from monitoringQuestions;'
    },

    getTrueAndFalseCount : (questionId) => {
        return `select 
                    sum(case when questionId = ${questionId} and answer != -1 then 1 else 0 end) as total, 
                    sum(case when questionId = ${questionId} and answer = 0 then 1 else 0 end) as falseCount,
                    sum(case when questionId = ${questionId} and answer = 1 then 1 else 0 end) as trueCount
                    from monitoringQuestions;`
    },

    insertQuestionStats : (qId, trueCount, falseCount) => {
        return `insert into 
                    questionStats (qId, trueCount, falseCount) 
                    values (${qId}, ${trueCount}, ${falseCount});`;
    }
}
const scheduleService = require('../services/schedule.services')

const { getschedule } = scheduleService

const schedule = async(req, res, next) => {
    try {
        const schedule = await getschedule()
        if (schedule.rows.length >= 0) {
            res.status(200).json({ "message": "Successful", "schedule": schedule.rows })
        } else {
            res.status(400).json({ "message": "Error" })
        }

    } catch (err) {
        console.log(err.message);
    }
}



module.exports = {
    schedule
}
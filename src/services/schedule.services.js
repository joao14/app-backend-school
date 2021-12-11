const pool = require('../config/db')


const getschedule = async(content) => {

    try {
        return await pool.query("select c.cour_name, d.day_name, h.hour_start, h.hour_end from scho_schedule s " +
            "inner join scho_course c on c.cour_id=s.cour_id " +
            "inner join scho_day d on d.day_id=s.day_id " +
            "inner join scho_hour h on h.hour_id = s.hour_id " +
            "order by d.day_id asc")

    } catch (e) {
        throw new Error(e.message)
    }
}



module.exports = {
    getschedule
}
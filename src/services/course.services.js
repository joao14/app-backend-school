const pool = require('../config/db')


const createcourse = async(course, content) => {

    try {
        return await pool.query('INSERT INTO scho_course (cour_name, cour_day, cour_hour, cour_description) VALUES ($1, $2, $3, $4)', [course.cour_name, course.cour_day, course.cour_hour, course.cour_description])

    } catch (e) {
        throw new Error(e.message)
    }
}

const getcourses = async(content) => {

    try {
        return await pool.query('SELECT * FROM scho_course ORDER BY cour_id ASC')

    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    createcourse,
    getcourses
}
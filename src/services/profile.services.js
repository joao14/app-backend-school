const pool = require('../config/db')


const createprofile = async(profile, content) => {

    try {
        return await pool.query('INSERT INTO scho_profile (prof_name, prof_description) VALUES ($1, $2)', [profile.prof_name, profile.prof_description])

    } catch (e) {
        throw new Error(e.message)
    }
}

const getprofiles = async(content) => {

    try {
        return await pool.query('SELECT * FROM scho_profile ORDER BY prof_id ASC')

    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    createprofile,
    getprofiles
}
const pool = require('../config/db')


const createusers = async(user, content) => {

    try {
        return await pool.query('INSERT INTO scho_user (user_identification, user_name, user_lastname, user_gender, user_age, user_email, user_phone, user_username, user_password, prof_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [user.user_identification, user.user_name, user.user_lastname, user.user_gender, user.user_age, user.user_email, user.user_phone, user.user_username, user.user_password, user.prof_id])

    } catch (e) {
        throw new Error(e.message)
    }
}

const updateusers = async(user, content) => {

    try {
        return await pool.query('UPDATE scho_user SET user_identification=$2, user_name=$3, user_lastname=$4, user_gender=$5, user_age=$6, user_email=$7, user_phone=$8, user_username=$9, user_password=$10, prof_id=$11 WHERE user_id=$1 ', [user.user_id, user.user_identification, user.user_name, user.user_lastname, user.user_gender, user.user_age, user.user_email, user.user_phone, user.user_username, user.user_password, user.prof_id])

    } catch (e) {
        throw new Error(e.message)
    }
}

const removeusers = async(user_id, content) => {

    try {
        return await pool.query('DELETE FROM scho_user WHERE user_id=$1 ', [user_id])

    } catch (e) {
        throw new Error(e.message)
    }
}


const getusers = async(content) => {

    try {
        return await pool.query('SELECT * FROM scho_user ORDER BY user_id ASC')

    } catch (e) {
        throw new Error(e.message)
    }
}

const getuserbycredentials = async(credentials, content) => {

    try {
        return await pool.query('SELECT u.* FROM scho_user u WHERE u.user_username=$1 AND u.user_password=$2', [credentials.username, credentials.password])

    } catch (e) {
        throw new Error(e.message)
    }
}



module.exports = {
    createusers,
    updateusers,
    removeusers,
    getusers,
    getuserbycredentials
}
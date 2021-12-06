const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const User = require('../models/user');
const pool = require('../config/db')

const getMe = async(req, res) => {
    const userId = req.user.userId
    const user = await User.findById(userId)
    if (user) {
        res.status(200).json({
            message: "Found",
            user,
        })
    } else {
        res.status(400).json({
            message: "Bad request"
        })
    }
}

const add = async(req, res) => {

    const { user_name, user_lastname, user_age, user_email, user_phone, user_identification } = req.body;

    try {

        const result = await pool.query('INSERT INTO scho_user (user_name, user_lastname, user_age, user_email, user_phone, user_identification) VALUES ($1, $2, $3, $4, $5, $6)', [user_name, user_lastname, user_age, user_email, user_phone, user_identification])
        res.status(201).send(`User added with ID: ${result.insertId}`)

    } catch (err) {
        console.log(err.message);
    }
}


const getUsers = async(req, res) => {
    try {
        const results = await pool.query('SELECT * FROM scho_user ORDER BY user_id ASC')
        res.status(200).json(results.rows)

    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    getUsers,
    add
}
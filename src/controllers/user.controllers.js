const bcrypt = require('bcrypt');
const userService = require('../services/user.services')
const utils = require('../utils/utils')
const jwt = require('jsonwebtoken');
const { generateJWT } = utils

const { createusers, getusers, getuserbycredentials } = userService

const userLogin = async(req, res, next) => {
    try {
        const { username, password } = req.body;

        const credentials = {
            username: username,
            password: password
        }

        const user = await getuserbycredentials(credentials)

        if (user.rows.length > 0) {
            res.status(200).json({ "message": "Successful Login", "token": generateJWT(user.rows[0]) })
        } else {
            res.status(400).json({ "message": "Incorrect login" })
        }

    } catch (err) {
        console.log(err.message);
    }
}

const add = async(req, res, next) => {

    try {

        const { user_name, user_lastname, user_age, user_email, user_phone, user_identification, user_username, user_password } = req.body;


        let user = {
            user_name: user_name,
            user_lastname: user_lastname,
            user_age: user_age,
            user_email: user_email,
            user_phone: user_phone,
            user_identification: user_identification,
            user_username: user_username,
            user_password: user_password
        }

        await createusers(user)

        res.status(201).send(`User added with ID: ${user.user_identification}`)

    } catch (err) {
        console.log(err.message);
    }
}


const getUsers = async(req, res) => {
    try {
        const results = await getusers()
        res.status(200).json(results.rows)

    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    getUsers,
    add,
    userLogin
}
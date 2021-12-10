const bcrypt = require('bcrypt');
const userService = require('../services/user.services')
const utils = require('../utils/utils')
const jwt = require('jsonwebtoken');
const { generateJWT } = utils

const { createusers, updateusers, removeusers, getusers, getuserbycredentials } = userService

const userLogin = async(req, res, next) => {
    try {
        const { username, password } = req.body;

        const credentials = {
            username: username,
            password: password
        }

        const user = await getuserbycredentials(credentials)

        if (user.rows.length > 0) {
            res.status(200).json({ "message": "Successful Login DBACCCESS", "token": generateJWT(user.rows[0]) })
        } else {
            res.status(400).json({ "message": "Incorrect login" })
        }

    } catch (err) {
        console.log(err.message);
    }
}

const add = async(req, res, next) => {

    try {

        const { user_identification, user_name, user_lastname, user_gender, user_age, user_email, user_phone, user_username, user_password, prof_id } = req.body;

        let user = {
            user_identification: user_identification,
            user_name: user_name,
            user_lastname: user_lastname,
            user_gender: user_gender,
            user_age: user_age,
            user_email: user_email,
            user_phone: user_phone,
            user_username: user_username,
            user_password: user_password,
            prof_id: prof_id
        }

        resp = await createusers(user)

        res.status(200).json({ "message": "Created successful", "data": user })

    } catch (err) {
        res.status(400).json({ "message": "Error - " + err.message })
    }
}

const update = async(req, res, next) => {

    try {

        const { user_id, user_identification, user_name, user_lastname, user_gender, user_age, user_email, user_phone, user_username, user_password, prof_id } = req.body;

        let user = {
            user_id: user_id,
            user_identification: user_identification,
            user_name: user_name,
            user_lastname: user_lastname,
            user_gender: user_gender,
            user_age: user_age,
            user_email: user_email,
            user_phone: user_phone,
            user_username: user_username,
            user_password: user_password,
            prof_id: prof_id
        }

        await updateusers(user)

        res.status(200).json({ "message": "Update successful", "data": user })

    } catch (err) {
        res.status(400).json({ "message": "Error - " + err.message })
    }
}

const remove = async(req, res, next) => {
    try {
        const user_id = req.params.id

        await removeusers(user_id)

        res.status(200).json({ "message": "Delete successful" })

    } catch (err) {
        res.status(400).json({ "message": "Error - " + err.message })
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
    update,
    remove,
    userLogin
}
const bcrypt = require('bcrypt');
const courseService = require('../services/course.services')
const utils = require('../utils/utils')
const jwt = require('jsonwebtoken');
const { generateJWT } = utils

const { createcourse, getcourses } = courseService

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

        const { cour_name, cour_day, cour_hour, cour_description } = req.body;

        let course = {
            cour_name: cour_name,
            cour_day: cour_day,
            cour_hour: cour_hour,
            cour_description: cour_description
        }

        console.log("::Curso::");
        console.log(course);

        resp = await createcourse(course)


        res.status(200).json({ "message": "Successful", "data": user })

    } catch (err) {
        res.status(400).json({ "message": "Error - " + err.message })
    }
}


const all = async(req, res) => {

    try {
        const results = await getcourses()
        res.status(200).json(results.rows)

    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    all,
    add,
    userLogin
}
const bcrypt = require('bcrypt');
const profileService = require('../services/profile.services')
const utils = require('../utils/utils')
const jwt = require('jsonwebtoken');

const { createprofile, getprofiles } = profileService

const add = async(req, res, next) => {

    try {

        const { prof_name, prof_description } = req.body;

        let profile = {
            prof_name: prof_name,
            prof_description: prof_description
        }

        resp = await createprofile(profile)


        res.status(200).json({ "message": "Successful", "data": profile })

    } catch (err) {
        res.status(400).json({ "message": "Error - " + err.message })
    }
}


const all = async(req, res) => {
    try {
        const results = await getprofiles()
        res.status(200).json(results.rows)

    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    all,
    add
}
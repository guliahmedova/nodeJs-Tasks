const pool = require('../config/db');
const Country = require('../models/country');
const { GET_SUCCESS } = require('../utils/constants/messages');
const { SuccessResult } = require('../utils/results/result');

const getAllCountries = async () => {
    const res = await pool.query('SELECT * FROM countries c where c.deleted = 0');
    return new SuccessResult(GET_SUCCESS, Country.mapAll(res.rows));
};

const addCountry = async country => {
    const res = await pool.query('INSERT INTO countries(sort_code, name) values ($1, $2)', [country.sort_code, country.name]);
    return new SuccessResult(GET_SUCCESS, res.rows[0]);
};

module.exports = {
    getAllCountries,
    addCountry
};
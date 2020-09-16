require('dotenv').config();

const {DB_NAME, DB_PASSWORD, DB_USER, DB_HOST} = process.env;

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: process.env.DB_PASSWORD,
        database: DB_NAME,
        charset: 'utf8'
    }
});

module.exports.knex = knex;
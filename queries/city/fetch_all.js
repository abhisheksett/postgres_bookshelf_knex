/**
 * The fetch_all() fetches a collection of models from the database,
 * using any query parameters currently set on the model to form a select query. 
 */

const knex = require('../config/db').knex;
const City = require('../model/city');

async function fetch_all() {

    try {

        let vals = await City.fetchAll();
        console.log(vals.toJSON());
    } catch (e) {

        console.log(`Failed to fetch data: ${e}`);
    } finally {

        knex.destroy();
    }
}

fetch_all();

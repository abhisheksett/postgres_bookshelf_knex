/**
 * The orderBy() function orders the retrieved data by the specified column name and sort order.
 * The order parameter is optional and defaults to 'ASC'. 
 */

const knex = require('../config/db').knex;
const City = require('../model/city');

async function fetch_city() {

    try {

        let vals = await City.forge().orderBy('name', 'DESC').fetchAll({require:true});
        console.log(vals.toJSON());
    } catch (e) {

        console.log(`Failed to fetch data: ${e}`);
    } finally {

        knex.destroy();
    }
}

fetch_city();
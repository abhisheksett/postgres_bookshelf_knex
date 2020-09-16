/**
 * The Project model contains the hasOne() function. 
 * By querying for a project, we can fetch its linked employee. 
 */

const knex = require('../../config/db').knex;
const City = require('../../model/city');

async function countCities() {

    try {

        let count = await City.count();

        console.log(`There are ${count} cities`);
    } catch (e) {

        logger.info(`No data found ${e}`);
    } finally {

        knex.destroy();
    }
}

countCities();

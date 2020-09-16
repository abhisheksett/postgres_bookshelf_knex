/**
 * Bookshelf's forge() is a simple helper function to instantiate a new model without needing the new keyword. 
 */

const knex = require('../../config/db').knex;
const City = require('../../model/city');

async function fetch_city() {

    try {

        let val = await City.forge({ 'id': '4' }).fetch();
        console.log(val.toJSON());
    } catch (e) {

        console.info(`No data found ${e}`);
    } finally {

        knex.destroy();
    }
}

fetch_city();

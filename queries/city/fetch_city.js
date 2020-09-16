/**
 * The fetch() gets a model from the database, using any attributes currently set on the model to form a select query.
 * With the require option set, the returned response is rejected with a NotFoundError if results are empty. 
 */

const knex = require('../config/db').knex;
const City = require('../model/city');
const logger = require('../logger/logger');



async function fetch_city() {

    try {

        let val = await City.where({ 'name': 'Bratislava' }).fetch({require:true});
        // console.log(val.toJSON());
        logger.info(val);
    } catch (e) {

        logger.info(`No data found ${e}`);
    } finally {

        knex.destroy();
    }
}

fetch_city();
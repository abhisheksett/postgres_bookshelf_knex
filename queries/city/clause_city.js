/**
 * Example of populationInBetween hooks
 */

const knex = require('../../config/db').knex;
const City = require('../../model/city');
const logger = require('../../logger/logger');



async function clause_city() {

    try {

        let val = await City.populationInBetween(432001, 3671000);
        logger.info(val);

    } catch (e) {

        logger.info(`No data found ${e}`);
    } finally {

        knex.destroy();
    }
}

clause_city();

const knex = require('../../config/db').knex;
const City = require('../../model/city');

async function countCities() {

    try {

         let val = await City.where({name: 'New York'}).destroy();
        console.log(val);

    } catch (e) {

        console.log(e);
    } finally {

        knex.destroy();
    }
}

countCities();

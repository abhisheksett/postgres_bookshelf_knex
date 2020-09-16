const knex = require('../../config/db').knex;
const Employee = require('../../model/employee');

async function doQuery() {

    try {

        let val = await Employee.where({ id: 1 }).fetch({
            withRelated: ['project'], require: true
        });

        console.log(val.toJSON());

    } catch (e) {

        console.log(`Failed to fetch data: ${e}`);
    } finally {

        knex.destroy();
    }
}

doQuery();
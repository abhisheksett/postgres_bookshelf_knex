/**
 * The withRelated option is specified to fetch the models of the collection,
 * eager loading any specified relations named on the model.
 * Without this option, we only get the project without its linked employee. 
 */

const knex = require('../../config/db').knex;
const Project = require('../../model/project');

async function doQuery() {

    try {

        let val = await Project.where({ id: 2 }).fetch({
            withRelated: ['employee']
        });

        console.log(val.toJSON());
    } catch (e) {

        console.log(`Failed to fetch data: ${e}`);
    } finally {

        knex.destroy();
    }
}

doQuery();
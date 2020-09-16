const knex = require('../../config/db').knex;
const User = require('../../model/user');

async function doQuery() {

    try {

        let val = await User.where({ id: 1 }).fetch({
            withRelated: ['tasks'], require: true
        });

        console.log(val.toJSON());

    } catch (e) {

        console.log(`Failed to fetch data: ${e}`);
    } finally {

        knex.destroy();
    }
}

doQuery();
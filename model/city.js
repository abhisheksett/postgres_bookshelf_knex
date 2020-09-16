const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);

const City = bookshelf.Model.extend({
    tableName: 'cities'
},
{
    populationInBetween: function(lowerRange, upperRange) {
        return this.query(function(qb) {
            qb.where('population', '>=', lowerRange)
            .andWhere('population', '<', upperRange)
        }).fetchAll()
    }
}
);

module.exports = City;

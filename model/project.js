/**
 * The hasOne() function defines a one-to-one relationships between models.
 * The hasOne relation specifies that the table has exactly one of another type of object,
 * specified by a foreign key in the other table. 
 */

// const knex = require('../config/db').knex;
// const bookshelf = require('bookshelf')(knex);
// const Employee = require('./employee');

// const Project = bookshelf.Model.extend({
//     tableName: 'projects',
//     employee: function () {
//         return this.hasOne(Employee);
//     }
// });

// module.exports = Project;


/* --------------------------------------------------------------- */

const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);

const Project = bookshelf.Model.extend({
    tableName: 'projects'
});

module.exports = Project;
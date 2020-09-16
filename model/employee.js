/**
 * The Project model contains the hasOne() function.
 * By querying for a project, we can fetch its linked employee. 
 */

// const knex = require('../config/db').knex;
// const bookshelf = require('bookshelf')(knex);

// const Employee = bookshelf.Model.extend({
//     tableName: 'employees'
// });

// module.exports = Employee;



/* ----------------------------------------------------------------- */

/**
 * The belongsTo() function is used when a model is a member of another target model.
 * The foreign key is defined in the current (source) model.
 * The belongsTo() function is used in one-to-one and one-to-many relationships. 
 */
const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);
const Project = require('./project');

const Employee = bookshelf.Model.extend({
    tableName: 'employees',
    project: function () {
        return this.belongsTo(Project);
    }
});

module.exports = Employee;
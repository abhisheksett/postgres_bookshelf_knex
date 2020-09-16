/**
 * The hasMany() defines a one-to-many relationship between models.
 * The relation specifies that the current model has one or more rows in another table which match on this model's primary key. 
 */

const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);
const Task = require('./task');

const User = bookshelf.Model.extend({
    tableName: 'users',
    tasks: function() {
        return this.hasMany(Task);
      }
});

module.exports = User;
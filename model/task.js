const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);

const Task = bookshelf.Model.extend({
    tableName: 'tasks',
});

module.exports = Task;
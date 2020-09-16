


### Prerequisites

Postgres must be installed in system. If PgAdmin is installed, that will give better view

### Insert initial data

Run the following command:

``` 
psql -h hostname -d dbname -U user -f sql/cities_postgresql.sql
```

Same needs to be done for <b>employees_project.sql</b> and <b>user_task.sql</b> as well.

### env setup

Create a .env file in local and add the following parameters:

```
DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
```

### Run a query

To run a query, execute the file like this command:

```
node queries/task_n_user/has_many.js
```
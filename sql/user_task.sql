DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id serial PRIMARY KEY,
    name VARCHAR(255)
);
INSERT INTO users
    (name)
VALUES('John Doe');
INSERT INTO users
    (name)
VALUES('Lucia Smith');

CREATE TABLE tasks
(
    id serial PRIMARY KEY,
    user_id INT REFERENCES users (id),
    name VARCHAR(255)
);
INSERT INTO tasks
    (user_id, name)
VALUES(1, 'Task A');
INSERT INTO tasks
    (user_id, name)
VALUES(1, 'Task B');
INSERT INTO tasks
    (user_id, name)
VALUES(1, 'Task C');
INSERT INTO tasks
    (user_id, name)
VALUES(2, 'Task D');
INSERT INTO tasks
    (user_id, name)
VALUES(2, 'Task E');
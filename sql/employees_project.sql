DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS projects;

CREATE TABLE projects
(
    id serial PRIMARY KEY,
    name VARCHAR(255)
);
INSERT INTO projects
    (name)
VALUES('Project A');
INSERT INTO projects
    (name)
VALUES('Project B');
INSERT INTO projects
    (name)
VALUES('Project C');

CREATE TABLE employees
(
    id serial PRIMARY KEY,
    project_id INT REFERENCES projects (id),
    name VARCHAR(255)
);
INSERT INTO employees
    (project_id, name)
VALUES(2, 'John Doe');
INSERT INTO employees
    (project_id, name)
VALUES(1, 'Lucia Smith');
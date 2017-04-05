const db = require('../dbconnection') // reference of dbconnection.js

const Task = {

    getAllTasks: (callback) => {
        return db.query("SELECT * FROM task", callback);
    },

    getTaskById: (id, callback) => {
        return db.query("SELECT * FROM task WHERE id = ?", [id], callback);
    },

    addTask: (Task, callback) => {
        return db.query("INSERT INTO task VALUES(?,?,?)", [Task.id, Task.title, Task.status], callback)
    },

    deleteTask: (id, callback) => {
        return db.query("DELETE FROM task WHERE id = ?", [id], callback)
    },

    updateTask: (id, Task, callback) => {
        return db.query("UPDATE task SET title=?, status=? WHERE id = ?", [Task.title, Task.status, id], callback)
    }

}

module.exports = Task;
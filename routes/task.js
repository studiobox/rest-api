const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

/**
 * Router for GET method for tasks. User can get
 * one task by providing task id or can get getAllTasks
 * tasks list with no parameters.
 */
router.get('/:id?', (req, res, next) => {
    if ( req.params.id ) {
        Task.getTaskById(req.params.id, (err, rows) => {
            if ( err ) {
                res.json(err)
            } else {
                res.json(rows)
            }
        })
    } else {
        Task.getAllTasks((err, rows) => {
            if ( err ) {
                res.json(err)
            } else {
                res.json(rows)
            }
        })
    }
})

/**
 * Router for POST method for tasks. User can add
 * task with this router, this router will get all
 * form parameters in req.body
 */
router.post('/', (req, res, next) => {
    Task.addTask(req.body, (err, count) => {
        if ( err ) {
            res.json(err)
        } else {
            res.json(req.body) // or return count for 1 or 0
        }
    })
})

/**
 * Router for DELETE method for tasks. User can delete
 * task with this router, user need to pass the task id
 * to delete task
 */
router.delete('/:id', (req, res, next) => {
    Task.deleteTask(req.params.id, (err, count) => {
        if ( err ) {
            res.json(err)
        } else {
            res.json(count)
        }
    })
})

/**
 * Router for PUT method for tasks. User can update
 * task with this router, user need to pass the task id
 * to update task and router will get form data from
 * req.body
 */
router.put('/:id', (req, res, next) => {
    Task.updateTask(req.params.id, req.body, (err, rows) => {
        if ( err ) {
            res.json(err)
        } else {
            res.json(rows)
        }
    })
})

module.exports = router
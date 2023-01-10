const routes = require('express').Router();
const taskController = require('../controllers/TaskController');

routes.get('/home', taskController.getAll)

module.exports = routes
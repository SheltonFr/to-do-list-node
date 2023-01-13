const routes = require("express").Router();
const taskController = require("../controllers/TaskController");

routes.get("/", taskController.getAllTasks);
routes.post("/create", taskController.createTask);
routes.get("/getById/:id/:method", taskController.getById);
routes.post("/updateTask/:id", taskController.updateById);
routes.get("/deleteTask/:id", taskController.deleteById);


module.exports = routes;

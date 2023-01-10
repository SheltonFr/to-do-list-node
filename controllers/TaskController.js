const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const taskList = await Task.find();
    return res.render("index", {taskList});
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
};

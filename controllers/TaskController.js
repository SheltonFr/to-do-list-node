const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const taskList = await Task.find();
    return res.render("index", { taskList, task: null, taskDelete: null });
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

const getById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    const taskList = await Task.find();
    const method = req.params.method;

    if (method == "update") {
      return res.render("index", { task, taskList, taskDelete: null });
    } else {
      return res.render("index", { task: null, taskList, taskDelete: task });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const updateById = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    return res.redirect("/");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    await Task.remove({ _id: req.params.id });
    return res.redirect("/");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateById,
  deleteById,
};

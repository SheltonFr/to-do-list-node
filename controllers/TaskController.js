const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const taskList = await Task.find();
    return res.render("index", { taskList, task: null });
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
    return res.render("index", { task, taskList });
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

const deleteTask = async(req, res) => {
  try{

    
  }catch(err){
    return res.status(500).send({ message: err.message });
  }
}
module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateById,
};

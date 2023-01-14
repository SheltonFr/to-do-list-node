const Task = require("../models/Task");

let message = "";
let type = "";

const getAllTasks = async (req, res) => {
  try {
    setTimeout(() => (message = ""), 1000);

    const taskList = await Task.find();
    return res.render("index", {
      taskList,
      task: null,
      taskDelete: null,
      message,
      type,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    message = "Insira um texto antes de adicionar a tarefa!";
    type = "danger";
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    message = "Tarefa Criada com sucesso!";
    type = "success";
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
      return res.render("index", {
        task,
        taskList,
        taskDelete: null,
        message,
        type,
      });
    } else {
      return res.render("index", {
        task: null,
        taskList,
        taskDelete: task,
        message,
        type,
      });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const updateById = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    message = "Tarefa actualizada com sucesso";
    type = "success";
    return res.redirect("/");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    await Task.remove({ _id: req.params.id });
    message = "Tarefa apagada com sucesso!";
    type = "success";
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

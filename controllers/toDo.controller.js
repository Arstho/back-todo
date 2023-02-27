const ToDo = require("../models/ToDo.model");

module.exports.toDoController = {
  getAllTodos: (req, res) => {
    ToDo.find()
      .then((todos) => {
        res.json(todos)
      });
  },

  deleteToDo: async (req, res) => {
    try {
      const data = await ToDo.findByIdAndDelete(req.params.id)
      return res.json(data)
    } catch (error) {
      console.log(error.message);
    }
  },

  addToDo: (req, res) => {
    ToDo.create({
      text: req.body.text,
      completed: false
    })
      .then((todos) => {
        res.json(todos)
      })
      .catch(error => {
        res.json({error: "Ошибка при добавлении"})
      });
  },

  patchToDo: (req, res) => {
    ToDo.findByIdAndUpdate(req.params.id,
      {
        completed: req.body.completed,
      },
      {new: true})
      .then((todos) => {
        res.json(todos)
      })
      .catch(err => {
        res.json("Ошибка!!!")
      });
  }
};
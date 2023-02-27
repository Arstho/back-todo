const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/todos.route"));

mongoose.connect("mongodb+srv://Aslan:1123@cluster0.w5uga6x.mongodb.net/ToDo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3222, () => {
  console.log('Сервер запущен успешно')
})
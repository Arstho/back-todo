const {Router} = require("express");
const router = Router();
const {toDoController} = require("../controllers/toDo.controller");

router.get("/", toDoController.getAllTodos);
router.post("/", toDoController.addToDo);
router.delete("/:id", toDoController.deleteToDo);
router.patch("/:id", toDoController.patchToDo);

module.exports = router;
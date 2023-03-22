const userControllers = require("../controllers/user.controllers");

const router = require("express").Router();

router.get("/", userControllers.getUsers);
router.get("/:ci", userControllers.getUser);
router.post("/", userControllers.createUser);
router.patch("/:ci", userControllers.updateUser);
router.delete("/:ci", userControllers.deleteUser);

module.exports = router;

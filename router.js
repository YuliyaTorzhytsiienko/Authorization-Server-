const Router = require("express");
const router = new Router();
const controller = require("./controller");
const { check } = require("express-validator");
const middleware = require("./middleware/middeleware");
const roleMiddleware = require("./middleware/roleMiddleware");

router.post(
    "/registration",
    [
        check("username", "Имя пользователя не может быть пустым").notEmpty(),
        check(
            "password",
            "Пароль должен быть больше 4 и меньше 7 символов"
        ).isLength({ min: 4, max: 7 }),
    ],
    controller.registration
);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["ADMIN"]), controller.getUsers);

module.exports = router;

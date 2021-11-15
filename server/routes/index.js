const userRouter = require("./accounts");
const lecturerRouter = require("./lecturer");
function routes(app) {
    app.use("/users", userRouter);
    app.use("/lecturer", lecturerRouter);
}

module.exports = routes;

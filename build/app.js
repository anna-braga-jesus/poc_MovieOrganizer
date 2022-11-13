"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const routes_js_1 = __importDefault(require("./routes/routes.js"));
const users_router_js_1 = require("./routes/users-router.js");
const movies_router_js_1 = require("./routes/movies-router.js");
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
routes_js_1.default.use(users_router_js_1.usersRouter);
routes_js_1.default.use(movies_router_js_1.moviesRouter);
routes_js_1.default.listen(4000, () => {
    console.log(`Server listen on port ${process.env.PORT}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user-controller");
const authentication_middleware_1 = require("../middlewares/authentication-middleware");
const usersRouter = express_1.default.Router();
exports.usersRouter = usersRouter;
usersRouter.get('/', user_controller_1.userIndex);
usersRouter.post('/', authentication_middleware_1.middleware.verifyUserByEmail, user_controller_1.userCreate);

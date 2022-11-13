import express from "express";
import { userCreate, userIndex } from "../controllers/user-controller";
import { middleware } from "../middlewares/authentication-middleware";

const usersRouter = express.Router();


usersRouter.get('/',userIndex); 
usersRouter.post('/',middleware.verifyUserByEmail, userCreate); 

export {usersRouter};

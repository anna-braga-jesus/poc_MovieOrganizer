import express from "express";
import { userCreate, userIndex } from "../controllers/user-controller";

const usersRouter = express.Router();


usersRouter.get('/',userIndex); 
usersRouter.post('/', userCreate); 

export {usersRouter};

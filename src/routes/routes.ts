import express from "express";
import cors from "cors";
import { movieController } from "../controllers/movies-controller.js";
import { middleware } from "../middlewares/authentication-middleware.js";

const server = express();
server.use(cors());
server.use(express.json());






export default server;




import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  server from "./routes/routes.js";
import { usersRouter } from "./routes/users-router.js";
import { moviesRouter } from "./routes/movies-router.js";
dotenv.config();

const PORT = process.env.PORT || 4000;
server.use(usersRouter);
server.use(moviesRouter);

server.listen(4000, ()=>{
    console.log(`Server listen on port ${process.env.PORT}`);
})
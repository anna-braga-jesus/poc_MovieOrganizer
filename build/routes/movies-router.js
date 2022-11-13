"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesRouter = void 0;
const express_1 = __importDefault(require("express"));
const authentication_middleware_js_1 = require("../middlewares/authentication-middleware.js");
const movies_controller_js_1 = require("../controllers/movies-controller.js");
const moviesRouter = express_1.default.Router();
exports.moviesRouter = moviesRouter;
moviesRouter.get('/movies', movies_controller_js_1.movieController.listMovies);
moviesRouter.post('/movies', authentication_middleware_js_1.middleware.verifyUserByEmail, movies_controller_js_1.movieController.insertMovies);
moviesRouter.put('/movies/:id', movies_controller_js_1.movieController.movieWatched);
moviesRouter.delete('/movies/:id', authentication_middleware_js_1.middleware.verifyUserByEmail, movies_controller_js_1.movieController.deleteMovies);

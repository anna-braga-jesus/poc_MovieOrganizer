"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.MovieSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    plataform: joi_1.default.string().required(),
    genero: joi_1.default.string().required(),
    status: joi_1.default.required(),
});

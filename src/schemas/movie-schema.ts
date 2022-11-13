import Joi from "joi";

export const MovieSchema = Joi.object({
    name:Joi.string().required(),
    plataform:Joi.string().required(),
    genero:Joi.string().required(),
    status: Joi.required(),
})



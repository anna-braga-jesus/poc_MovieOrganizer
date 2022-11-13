import Joi from "joi";

export const UserSchema = Joi.object({
    name: Joi.string().min(1).empty().required(),
    email: Joi.string().email().min(1).empty().required()
})
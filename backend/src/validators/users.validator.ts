import Joi from "joi";

const registerSchema=Joi.object({
    name: Joi.string().min(4).max(32).required(),
    email: Joi.string().email().min(5).max(320).required(),
    password: Joi.string().min(6).max(32).required()
})

const loginSchema=Joi.object({
    email: Joi.string().email().min(5).max(320).required(),
    password: Joi.string().min(6).max(32).required()
})
export {loginSchema,registerSchema}
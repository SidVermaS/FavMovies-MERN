import Joi from "joi";

const createMovieSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  rating: Joi.number().min(0).max(5).required(),
  cast: Joi.array().min(1).required(),
  genre: Joi.string().min(1).max(255).required(),
  release: Joi.date().required(),
  user_id: Joi.number().required(),
});
const deleteMovieSchema = Joi.object({
    id: Joi.string().min(1).required(),
  });
const fetchMovieSchema = Joi.object({
    page: Joi.string().min(1).required(),
    limit: Joi.string().min(1).required(),
    user_id: Joi.string().min(1).required(),
  });
const updateMovieSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(1).max(255).optional(),
  rating: Joi.number().min(0).max(5).optional(),
  cast: Joi.array().min(1).optional(),
  genre: Joi.string().min(1).max(255).optional(),
  release: Joi.date().optional(),
  user_id: Joi.number().optional(),
});

export { createMovieSchema,deleteMovieSchema,fetchMovieSchema, updateMovieSchema };

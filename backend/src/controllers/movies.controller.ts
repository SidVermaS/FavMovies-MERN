import { Request, Response } from "express";
import Movies from "../models/movies.model";
import {
  createMovieSchema,
  deleteMovieSchema,
  fetchMovieSchema,
  updateMovieSchema,
} from "../validators/movies.validator";

const create = async (req: Request, res: Response) => {
  try {
    const { error, value } = createMovieSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { name, rating, cast, genre, release, user_id }: Movies = value;

    const movie: any = await Movies.create({
      name,
      rating,
      cast,
      genre,
      release,
      user_id,
    });

    if (movie) {
      return res.status(201).json({
        movie_id: movie.id,
        message: "Successfully added the movie",
      });
    }
    return res.status(500).json({ message: "Failed to add the movie" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to add the movie", error });
  }
};

const fetch = async (req: Request, res: Response) => {
  try {
    const { error, value } = fetchMovieSchema.validate(req.query);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    let { page, limit, user_id }: any = value;

    page = parseInt(page);
    limit = parseInt(limit);
    user_id = parseInt(user_id);
    const offset = (page - 1) * limit;
    const movies = await Movies.findAll({
      offset,
      limit,
      where: {
        user_id,
      },
    });
    if (movies.length) {
      return res.status(200).json({
        movies,
        message: "Successfully fetched the movies",
      });
    }
    return res.status(500).json({ message: "Failed to fetch the movies" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to fetch the movies", error });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { error, value } = updateMovieSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { id, name, cast, genre, rating } = value;
    const movieReq: Partial<Movies> = {
      id,
    };
    if (name) {
      movieReq.name = name;
    }
    if (cast) {
      movieReq.cast = cast;
    }
    if (genre) {
      movieReq.genre = genre;
    }
    if (rating) {
      movieReq.rating = rating;
    }
    const movie = await Movies.update(movieReq, {
      where: {
        id,
      },
    });
    if (movie?.[0]) {
      return res.status(200).json({
        message: "Successfully updated the movie",
      });
    }
    return res.status(500).json({ message: "Failed to update the movie" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update the movie", error });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const { error, value } = deleteMovieSchema.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const id = value.id;

    const movie = await Movies.destroy({
      where: {
        id: parseInt(id),
      },
    });
    if (movie) {
      return res.status(200).json({
        movie_id: id,
        message: "Successfully removed the movie",
      });
    }
    return res.status(500).json({ message: "Failed to remove the movie" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to remove the movie", error });
  }
};

export { create, fetch, remove, update };

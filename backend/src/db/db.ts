import path from "path";
import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import Movies from "../models/movies.model";
import Users from "../models/users.model";

import { TableNamesE } from "../utils/enums";

const database = process.env.DB_NAME as string;
const dialect: Dialect = process.env.DB_DIALECT as Dialect;
const host = process.env.DB_HOST as string;
const password = process.env.DB_PASSWORD as string;
const port = parseInt(process.env.DB_PORT!) || 5432;
const username = process.env.DB_USERNAME as string;

const sequelize = new Sequelize({
  database,
  dialect,
  host,
  password,
  port,
  username,
  models: [Users, Movies],
  ssl: false,

});
// Movies.belongsTo(Users, { as: TableNamesE.movies });
// Users.hasMany(Movies, {as: TableNamesE.users})
export default sequelize;

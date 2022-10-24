"use strict";
const { Model } = require("sequelize");

interface MoviesI {
  id: number;
  name: string;
  rating: number;
  cast: string[];
  genre: string;
  release: Date;
  user_id: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Movies extends Model<MoviesI> implements MoviesI {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id: number;
    name: string;
    rating: number;
    cast: string[];
    genre: string;
    release: Date;
    user_id: number;
    static associate(models: any) {
      // define association here
    }
  }
  Movies.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rating: {
        type: Sequelize.DECIMAL(5,1),
        allowNull: false,
      },
      cast: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      release: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "movies",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
    {
      sequelize,
      modelName: "Movies",
    }
  );
  return Movies;
};

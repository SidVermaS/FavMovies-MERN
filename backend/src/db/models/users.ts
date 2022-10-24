"use strict";
const { Model } = require("sequelize");

interface UsersI {
  id: number;
  name: string;
  email: string;
  password: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<UsersI> implements UsersI {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id: number;
    name: string;
    email: string;
    password: string;
    static associate(models: any) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return Users;
};

"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "movies",
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
            model: "users",
            key: "id",
          },
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("movies");
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "John Doe",
          email: "john@mail.com",
          password: "$2b$10$X4aHhYltVs2ZBkrAL9cCLeMy0DEbSRs3uxdnnxNepk/lXNM65sp1G",
        },
        {
          id: 2,
          name: "Vivek Patel",
          email: "vivek@mail.com",
          password: "$2b$10$X4aHhYltVs2ZBkrAL9cCLeMy0DEbSRs3uxdnnxNepk/lXNM65sp1G",
        },
      ],
      {
        
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

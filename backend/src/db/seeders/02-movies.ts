"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "movies",
      [
        {
          name: "Fast & Furious 9",
          rating: 3.2,
          cast: ["John Cena", "Vin Diesel"],
          genre: "Action",
          release: "2022-10-22T19:46:57+00:00",
          user_id: 1,
        },
        {
          name: "Harry Potter And The Deathly Hallows II",
          rating: 4.9,
          cast: ["Daniel Radcliffe", "Emma Watson","Rupert Grint"],
          genre: "Adventure",
          release: "2011-07-05T19:46:57+00:00",
          user_id: 1,
        },
        {
          name: "The Amazing Spider-Man",
          rating: 4.6,
          cast: ["Andrew Garfield", "Emma Stone"],
          genre: "Action",
          release: "2012-06-29T19:46:57+00:00",
          user_id: 1,
        },        {
            name: "Batman v Superman: Dawn of Justice",
            rating: 4.2,
            cast: ["Ben Affleck", "Henry Cavill"],
            genre: "Action",
            release: "2016-03-25T19:46:57+00:00",
            user_id: 2,
          },
          {
            name: "Bumblebee",
            rating: 4.6,
            cast: ["Hailee Steinfeld", "Dylan O'Brien","John Cena"],
            genre: "SciFi",
            release: "2019-01-04T19:46:57+00:00",
            user_id: 2,
          },        {
            name: "Transformers: Revenge of the Fallen",
            rating: 4.3,
            cast: ["Shia LaBeouf", "Megan Fox","John Turturro"],
            genre: "Thriller",
            release: "2009-06-24T19:46:57+00:00",
            user_id: 2,
          },
      ],
      {}
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

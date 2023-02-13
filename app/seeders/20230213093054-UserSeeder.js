'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
         firstname: 'John',
         lastname: 'Doe',
         email : 'admin@example.com',
         password: 'password'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {truncate: true });
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('UserGames', [{
      username: 'johndoe',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    {
      username: 'liffburton',
      password: 'seekndestroy',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'bondanprakoso',
      password: 'Superfunk',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserGames', null, {});
  }
};

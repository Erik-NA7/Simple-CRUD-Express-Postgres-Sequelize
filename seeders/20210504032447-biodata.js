'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Biodata', [{
      fullname: 'John Doe Saragi',
      email: 'johndoe@gmail.com',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      fullname: 'Cliff Burton',
      email: 'cliff@gmail.com',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date() 
     }, {
      fullname: 'Bondan Prakoso',
      email: 'bondan@gmail.com',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GameHistories', [{
      score: 9000,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      score: 8000,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      score: 7000,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      score:'9000',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      score:'9000',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      score:'9000',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      score:'9000',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      score:'9000',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      score:'9000',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     }]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};

'use strict';
const { Model } = require('sequelize');
const lockAttribute = require('sequelize-noupdate-attributes')
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  lockAttribute(sequelize);

  const GameHistories = sequelize.define('GameHistories', {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      noUpdate: true,
    }
  });
  GameHistories.associate = function(models) {
    GameHistories.belongsTo(models.UserGames, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  };
  return GameHistories;
};
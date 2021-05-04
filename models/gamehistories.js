'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const GameHistories = sequelize.define('GameHistories', {
    score: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });
  GameHistories.associate = function(models) {
    GameHistories.belongsTo(models.UserGames, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return GameHistories;
};
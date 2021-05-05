'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const GameHistories = sequelize.define('GameHistories', {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
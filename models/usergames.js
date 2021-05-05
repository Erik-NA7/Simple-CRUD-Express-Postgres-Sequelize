'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const UserGames =  sequelize.define('UserGames', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  UserGames.associate = function(models) {
    UserGames.hasOne(models.Biodata, {
      foreignKey: 'userId',
    });
    UserGames.hasMany(models.GameHistories, {
      foreignKey: 'userId'
    });
  }
  return UserGames;
};
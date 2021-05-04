'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Biodata =  sequelize.define('Biodata', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    userId: DataTypes.STRING,
  });
  Biodata.associate = function(models) {
    Biodata.belongsTo(models.UserGames, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Biodata;
};
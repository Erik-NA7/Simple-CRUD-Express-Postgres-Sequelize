'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Biodata =  sequelize.define('Biodata', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: DataTypes.INTEGER,
    allowNull: false,
  });
  Biodata.associate = function(models) {
    Biodata.belongsTo(models.UserGames, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Biodata;
};
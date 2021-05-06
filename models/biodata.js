'use strict';
const { Model } = require('sequelize');
const lockAttribute = require('sequelize-noupdate-attributes')
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  lockAttribute(sequelize);

  const Biodata =  sequelize.define('Biodata', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      noUpdate: true,
    }
  });
  Biodata.associate = function(models) {
    Biodata.belongsTo(models.UserGames, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Biodata;
};
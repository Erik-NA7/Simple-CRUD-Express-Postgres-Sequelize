'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameHistories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GameHistories.belongsTo(models.UserGames);
    }
  };
  GameHistories.init({
    score: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'GameHistories',
  });
  return GameHistories;
};
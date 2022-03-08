'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_game_History.init({
    User_game: DataTypes.STRING,
    Skor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_game_History',
  });
  return User_game_History;
};
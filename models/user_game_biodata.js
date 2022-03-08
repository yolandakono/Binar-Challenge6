'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_game_Biodata.init({
    Biodata: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_game_Biodata',
  });
  return User_game_Biodata;
};
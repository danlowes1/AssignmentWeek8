const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class Hero_ai_find extends Model {}

Hero_ai_find.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    findDate: {
      type: DataTypes.DATEONLY, 
      allowNull: false,
      defaultValue: Sequelize.NOW,

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "hero_ai_find",
  }
);

// Export Hero_ai_find model
module.exports = Hero_ai_find;

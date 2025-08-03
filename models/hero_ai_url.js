const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class Hero_ai_url extends Model {}

Hero_ai_url.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
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
    modelName: "hero_ai_url",
  }
);

// Export Hero_ai_url model
module.exports = Hero_ai_url;

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Recipe extends Model {}

Recipe.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipe: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize
    }
);

module.exports = Recipe;
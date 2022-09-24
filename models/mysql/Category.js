const { DataTypes } = require('sequelize/types');
const { sequelize } = require('../../config/sequelize');

const Product = require('./Product');

const Category = sequelize.define(
    'categories',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type : DataTypes.STRING
        },
        description: {
            type : DataTypes.STRING
        }
    },
    {
        timestamps : true
    }
);

Category.hasMany(Product, {
    foreignKey : 'category_id'
});

module.exports = Category;
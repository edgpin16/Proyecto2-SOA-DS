const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

const Product = require('./Product');

const Category = sequelize.define(
    'Category',
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
        timestamps : true,
        tableName : 'categories'
    }
);

Category.associations = () => {
    Category.hasMany(Product, {
        as : 'Product',
        foreignKey : 'category_id'
    });
}

module.exports = Category;
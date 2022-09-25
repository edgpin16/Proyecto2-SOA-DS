const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

const Category = require('./Category.js');
const Sales = require('./Sale');
const SalesProducts = require('./SalesProducts');

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_id : {
            type: DataTypes.INTEGER,
            unique : true,
            references: {
                model: Category,
                key: 'id'
            }
        },
        name: {
            type : DataTypes.STRING
        },
        description: {
            type : DataTypes.STRING
        },
        barcode: {
            type : DataTypes.STRING
        },
        price_in: {
            type : DataTypes.FLOAT.UNSIGNED
        },
        price_out: {
            type : DataTypes.FLOAT.UNSIGNED
        },
        quantity: {
            type : DataTypes.INTEGER.UNSIGNED
        },
        presentation: {
            type : DataTypes.STRING
        },
        is_active: {
            type : DataTypes.BOOLEAN
        }
    },
    {
        timestamps : true,
        tableName : 'products'
    }
);

// Product.belongsTo(Category);
Product.associations = () => {
    Product.belongsToMany(Sales, { through : SalesProducts });
}

module.exports = Product;
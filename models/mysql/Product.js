const { DataTypes } = require('sequelize/types');
const { sequelize } = require('../../config/sequelize');

const Category = require('./Category.js');
const Sales = require('./Sale');
const SalesProducts = require('./SalesProducts');

const Product = sequelize.define(
    'products',
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
        timestamps : true
    }
);

Product.belongsTo(Category);
Product.belongsToMany(Sales, { through : SalesProducts });

module.exports = Product;
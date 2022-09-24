const { DataTypes } = require('sequelize/types');
const { sequelize } = require('../../config/sequelize');

const Sales = require('./Sale');
const Product = require('./Product');

const SalesProducts = sequelize.define(
    'salesproducts',
    {
        sale_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Sales,
              key: 'id'
            }
          },
          product_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Product, 
              key: 'id'
            }
          }
    }
);

module.exports = SalesProducts;
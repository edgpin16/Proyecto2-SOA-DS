const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

const Sales = require('./Sale');
const Product = require('./Product');

const SalesProducts = sequelize.define(
    'SalesProducts',
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
    },
    {
      timestamps : true,
      tableName : 'salesproducts'
    } 
);

module.exports = SalesProducts;
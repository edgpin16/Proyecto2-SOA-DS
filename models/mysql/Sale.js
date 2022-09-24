const { DataTypes } = require('sequelize/types');
const { sequelize } = require('../../config/sequelize');

const User = require('./User');
const Person = require('./Person');
const SalesProducts = require('./SalesProducts');
const Product = require('./Product');

const Sales = sequelize.define(
    'sales',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id : {
            type: DataTypes.INTEGER,
            unique : true,
            references: {
                model: User,
                key: 'id'
            }
        },
        person_id : {
            type: DataTypes.INTEGER,
            unique : true,
            references: {
                model: Person,
                key: 'id'
            }
        },
        total: {
            type: DataTypes.FLOAT.UNSIGNED
        }
    },
    {
        timestamps : true
    }
);

Sales.belongsTo(User);
Sales.belongsTo(Person);
Sales.belongsToMany(Product, { through : SalesProducts });

module.exports = Sales;
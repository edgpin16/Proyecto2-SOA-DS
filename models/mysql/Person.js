const { DataTypes } = require('sequelize/types');
const { sequelize } = require('../../config/sequelize');

const Sales = require('./Sale');

const Person = sequelize.define(
    'people',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type : DataTypes.STRING
        },
        lastName: {
            type : DataTypes.STRING
        },
        DOB: { //Fecha de nacimiento
            type: DataTypes.DATEONLY
        },
        email: {
            type : DataTypes.STRING,
            unique : true
        },
        address: {
            type : DataTypes.STRING
        },
        phone: {
            type : DataTypes.STRING,
            unique : true
        }
    },
    {
        timestamps : true
    }
);

Person.hasMany(Sales, {
    foreignKey : 'person_id'
});

module.exports = Person;
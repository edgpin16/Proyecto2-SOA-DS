const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

const Sales = require('./Sale');

const Person = sequelize.define(
    'Person',
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
        timestamps : true,
        tableName : 'people'
    }
);

Person.associations = () => {
    Person.hasMany(Sales, {
        as : 'sales',
        foreignKey : 'person_id'
    });
}

module.exports = Person;
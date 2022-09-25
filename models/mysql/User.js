const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

const Sales = require('./Sale');

const User = sequelize.define(
    'users',
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
        username: {
            type : DataTypes.STRING,
            unique : true
        },
        email: {
            type : DataTypes.STRING,
            unique : true
        },
        password: {
            type : DataTypes.STRING
        },
        role: {
            type : DataTypes.ENUM(['USER', 'ADMIN'])
        },
        DOB: { //Fecha de nacimiento
            type: DataTypes.DATEONLY
        }
    },
    {
        timestamps : true,
        tableName : 'users'
    } 
);

User.associations = () => {
    User.hasMany(Sales, {
        as: 'sales',
        foreignKey : 'user_id'
    });
}

module.exports = User;
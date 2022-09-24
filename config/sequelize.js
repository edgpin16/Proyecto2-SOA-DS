const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    user,
    password,
    {
        host,
        dialect:'mysql'
    }
);

const dbConnectSQL = async () => {
    try{
        await sequelize.authenticate();
        console.log('MySQL connection OK');
    }
    catch(e){
        console.log('MySQL error connection', e);
    }
}

module.exports = { sequelize, dbConnectSQL };
require('dotenv').config(); //Obtenemos las variables de entorno del archivo .env

const express = require('express');
const cors = require('cors');
const app = express();

const { dbConnectSQL } = require('./config/sequelize');

const port = process.env.PORT || 3000;

app.use(cors()); //Usamos cors, medida de seguridad que restringe solicitudes HTTP de origen cruzado

app.use(express.json()); //Middleware para cargas JSON

app.use('/api', require('./routes')); //Invocamos las rutas de la API

try{
    dbConnectSQL();
}
catch(e){
    console.log('Ha ocurrido un error intentando conectar la BD :(', e);
}

app.listen(port, () => {
    console.log(`Your server is ready in the port: ${port}`);
});
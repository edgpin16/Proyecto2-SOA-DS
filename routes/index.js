const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname; //Return a array with fileNames in this directory

const removeExtension = fileName => fileName.split('.').shift(); //Split the string in .
//This return two string, so, shift selecciona the first string

fs.readdirSync(PATH_ROUTES).filter(file => {
    const name = removeExtension(file);

    if(name !== 'index') router.use(`/${name}`, require(`./${file}`));
});

module.exports = router;
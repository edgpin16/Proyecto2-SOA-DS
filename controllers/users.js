const { matchedData } = require('express-validator');
const { usersModel } = require('../models/index');
const { handleHttpError } = require('../utils/handleError');

/*
 * get all resources
 * @param {*} req : request
 * @param {*} res : response
*/
const getUsers = async (req, res) => {
    
    try{
        const data = await usersModel.findAll({});
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_ALL_USERS');
    }
};

/*
 * get resource by id
 * @param {*} req : request
 * @param {*} res : response
*/
const getUser = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await usersModel.findByPk(id);
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_USER')
    }
};

/*
 * post resource and save in DB
 * @param {*} req : request
 * @param {*} res : response
*/
const createUser = async (req, res) => {
    
    try{
        const body  = matchedData(req); //limpia parametros basura o malintencionados
        const user = await usersModel.create(body);
        res.send({
            msg : 'Resource created successfully',
            user
        });
    }
    catch(e){
        handleHttpError(res, 'ERROR_CREATE_USER');
    }
};

/*
 * update resource
 * @param {*} req : request
 * @param {*} res : response
*/
const updateUser = async(req, res) => {

    try{
        const { id, ...body } = matchedData(req);
        const data = await usersModel.update(body, { where : {id} });
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_UPDATE_USER')
    }

};

/*
 * delete resource
 * @param {*} req : request
 * @param {*} res : response
*/
const deleteUser = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await usersModel.destroy({ where : {id} });
        
        res.send({msg : 'resource delete successfully', data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_DELETE_USER')
    }
};

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};
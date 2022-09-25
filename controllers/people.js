const { matchedData } = require('express-validator');
const { peopleModel } = require('../models/index');
const { handleHttpError } = require('../utils/handleError');

/*
 * get all resources
 * @param {*} req : request
 * @param {*} res : response
*/
const getPeople = async (req, res) => {
    
    try{
        const data = await peopleModel.findAll({});
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_ALL_PEOPLE');
    }
};

/*
 * get resource by id
 * @param {*} req : request
 * @param {*} res : response
*/
const getPerson = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await peopleModel.findByPk(id);
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_PERSON')
    }
};

/*
 * post resource and save in DB
 * @param {*} req : request
 * @param {*} res : response
*/
const createPerson = async (req, res) => {
    
    try{
        const body  = matchedData(req); //limpia parametros basura o malintencionados
        const person = await peopleModel.create(body);
        res.send({
            msg : 'Resource created successfully',
            person
        });
    }
    catch(e){
        handleHttpError(res, 'ERROR_CREATE_PERSON');
    }
};

/*
 * update resource
 * @param {*} req : request
 * @param {*} res : response
*/
const updatePerson = async(req, res) => {

    try{
        const { id, ...body } = matchedData(req);
        const data = await peopleModel.update(body, { where : {id} });
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_UPDATE_PEOPLE')
    }

};

/*
 * delete resource
 * @param {*} req : request
 * @param {*} res : response
*/
const deletePerson = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await peopleModel.destroy({ where : {id} });
        
        res.send({msg : 'resource delete successfully', data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_DELETE_PERSON')
    }
};

module.exports = {getPeople, getPerson, createPerson, updatePerson, deletePerson};
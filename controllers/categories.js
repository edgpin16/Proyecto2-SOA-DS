const { matchedData } = require('express-validator');
const { categoriesModel } = require('../models/index');
const { handleHttpError } = require('../utils/handleError');

/*
 * get all resources
 * @param {*} req : request
 * @param {*} res : response
*/
const getCategories = async (req, res) => {
    
    try{
        const data = await categoriesModel.findAll({});
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_ALL_CATEGORIES');
    }
};

/*
 * get resource by id
 * @param {*} req : request
 * @param {*} res : response
*/
const getCategory = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await categoriesModel.findByPk(id);
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_CATEGORY')
    }
};

/*
 * post resource and save in DB
 * @param {*} req : request
 * @param {*} res : response
*/
const createCategory = async (req, res) => {
    
    try{
        const body  = matchedData(req); //limpia parametros basura o malintencionados
        const category = await categoriesModel.create(body);
        res.send({
            msg : 'Resource created successfully',
            category
        });
    }
    catch(e){
        handleHttpError(res, 'ERROR_CREATE_CATEGORY');
    }
};

/*
 * update resource
 * @param {*} req : request
 * @param {*} res : response
*/
const updateCategory = async(req, res) => {

    try{
        const { id, ...body } = matchedData(req);
        const data = await categoriesModel.update(body, { where : {id} });
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_UPDATE_CATEGORY')
    }

};

/*
 * delete resource
 * @param {*} req : request
 * @param {*} res : response
*/
const deleteCategory = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await categoriesModel.destroy({ where : {id} });
        
        res.send({msg : 'resource delete successfully', data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_DELETE_CATEGORY')
    }
};

module.exports = {getCategories, getCategory, createCategory, updateCategory, deleteCategory};
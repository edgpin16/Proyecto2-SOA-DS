const { matchedData } = require('express-validator');
const { productsModel } = require('../models/index');
const { handleHttpError } = require('../utils/handleError');

/*
 * get all resources
 * @param {*} req : request
 * @param {*} res : response
*/
const getProducts = async (req, res) => {
    
    try{
        const data = await productsModel.findAll({});
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_ALL_PRODUCTS');
    }
};

/*
 * get resource by id
 * @param {*} req : request
 * @param {*} res : response
*/
const getProduct = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await productsModel.findByPk(id);
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_PRODUCT')
    }
};

/*
 * post resource and save in DB
 * @param {*} req : request
 * @param {*} res : response
*/
const createProduct = async (req, res) => {
    
    try{
        const body  = matchedData(req); //limpia parametros basura o malintencionados
        const product = await productsModel.create(body);
        res.send({
            msg : 'Resource created successfully',
            product
        });
    }
    catch(e){
        handleHttpError(res, 'ERROR_CREATE_PRODUCT');
    }
};

/*
 * update resource
 * @param {*} req : request
 * @param {*} res : response
*/
const updateProduct = async(req, res) => {

    try{
        const { id, ...body } = matchedData(req);
        const data = await productsModel.update(body, { where : {id} });
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_UPDATE_PRODUCT')
    }

};

/*
 * delete resource
 * @param {*} req : request
 * @param {*} res : response
*/
const deleteProduct = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await productsModel.destroy({ where : {id} });
        
        res.send({msg : 'resource delete successfully', data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_DELETE_PRODUCT')
    }
};

module.exports = {getProducts, getProduct, createProduct, updateProduct, deleteProduct};
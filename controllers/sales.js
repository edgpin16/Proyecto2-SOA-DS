const { matchedData } = require('express-validator');
const { saleModel } = require('../models/index');
const { handleHttpError } = require('../utils/handleError');

/*
 * get all resources
 * @param {*} req : request
 * @param {*} res : response
*/
const getSales = async (req, res) => {
    
    try{
        const data = await saleModel.findAll({});
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_ALL_SALES');
    }
};

/*
 * get resource by id
 * @param {*} req : request
 * @param {*} res : response
*/
const getSale = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await saleModel.findByPk(id);
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_GET_SALE')
    }
};

/*
 * post resource and save in DB
 * @param {*} req : request
 * @param {*} res : response
*/
const createSale = async (req, res) => {
    
    try{
        const body  = matchedData(req); //limpia parametros basura o malintencionados
        const sale = await saleModel.create(body);
        res.send({
            msg : 'Resource created successfully',
            sale
        });
    }
    catch(e){
        handleHttpError(res, 'ERROR_CREATE_SALE');
    }
};

/*
 * update resource
 * @param {*} req : request
 * @param {*} res : response
*/
const updateSale = async(req, res) => {

    try{
        const { id, ...body } = matchedData(req);
        const data = await saleModel.update(body, { where : {id} });
        res.send({data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_UPDATE_SALE')
    }

};

/*
 * delete resource
 * @param {*} req : request
 * @param {*} res : response
*/
const deleteSale = async(req, res) => {
    try{
        const body = matchedData(req);
        const { id } = body;
        const data = await saleModel.destroy({ where : {id} });
        
        res.send({msg : 'resource delete successfully', data});
    }
    catch(e){
        handleHttpError(res, 'ERROR_DELETE_SALE')
    }
};

module.exports = {getSales, getSale, createSale, updateSale, deleteSale};
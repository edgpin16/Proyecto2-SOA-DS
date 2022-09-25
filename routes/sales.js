const express = require('express');
const { getSales, getSale, createSale, updateSale, deleteSale } = require('../controllers/sales');
const { validatorCreateItem, validatorGetItem } = require('../validators/sales');
const router = express.Router();

/*
    GET ALL USERS
*/
router.get('/', getSales);

/*
    GET USER BY ID
*/
router.get('/:id', validatorGetItem, getSale);

/*
    CREATE USER
*/
router.post('/', validatorCreateItem, createSale);

/*
    UPDATE USER BY ID
*/
router.put('/:id', validatorGetItem, validatorCreateItem, updateSale);

/*
    DELETE USER BY ID
*/
router.delete('/:id', validatorGetItem, deleteSale);

module.exports = router; 
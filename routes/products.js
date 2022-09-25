const express = require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products');
const { validatorCreateItem, validatorGetItem } = require('../validators/products');
const router = express.Router();

/*
    GET ALL USERS
*/
router.get('/', getProducts);

/*
    GET USER BY ID
*/
router.get('/:id', validatorGetItem, getProduct);

/*
    CREATE USER
*/
router.post('/', validatorCreateItem, createProduct);

/*
    UPDATE USER BY ID
*/
router.put('/:id', validatorGetItem, validatorCreateItem, updateProduct);

/*
    DELETE USER BY ID
*/
router.delete('/:id', validatorGetItem, deleteProduct);

module.exports = router; 
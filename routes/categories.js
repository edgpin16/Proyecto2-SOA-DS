const express = require('express');
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/categories');
const { validatorCreateItem, validatorGetItem } = require('../validators/categories');
const router = express.Router();

/*
    GET ALL USERS
*/
router.get('/', getCategories);

/*
    GET USER BY ID
*/
router.get('/:id', validatorGetItem, getCategory);

/*
    CREATE USER
*/
router.post('/', validatorCreateItem, createCategory);

/*
    UPDATE USER BY ID
*/
router.put('/:id', validatorGetItem, validatorCreateItem, updateCategory);

/*
    DELETE USER BY ID
*/
router.delete('/:id', validatorGetItem, deleteCategory);

module.exports = router; 
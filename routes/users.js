const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');
const { validatorCreateItem, validatorGetItem } = require('../validators/users');
const router = express.Router();

/*
    GET ALL USERS
*/
router.get('/', getUsers);

/*
    GET USER BY ID
*/
router.get('/:id', validatorGetItem, getUser);

/*
    CREATE USER
*/
router.post('/', validatorCreateItem, createUser);

/*
    UPDATE USER BY ID
*/
router.put('/:id', validatorGetItem, validatorCreateItem, updateUser);

/*
    DELETE USER BY ID
*/
router.delete('/:id', validatorGetItem, deleteUser);

module.exports = router; 
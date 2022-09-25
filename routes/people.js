const express = require('express');
const { getPeople, getPerson, createPerson, updatePerson, deletePerson } = require('../controllers/people');
const { validatorCreateItem, validatorGetItem } = require('../validators/people');
const router = express.Router();

/*
    GET ALL USERS
*/
router.get('/', getPeople);

/*
    GET USER BY ID
*/
router.get('/:id', validatorGetItem, getPerson);

/*
    CREATE USER
*/
router.post('/', validatorCreateItem, createPerson);

/*
    UPDATE USER BY ID
*/
router.put('/:id', validatorGetItem, validatorCreateItem, updatePerson);

/*
    DELETE USER BY ID
*/
router.delete('/:id', validatorGetItem, deletePerson);

module.exports = router; 
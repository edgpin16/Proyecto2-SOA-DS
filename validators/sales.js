const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateItem = [
    check('total').exists().notEmpty(),
    check('user_id').exists().notEmpty(),
    check('person_id').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next),
];

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next),
];

module.exports = {validatorCreateItem, validatorGetItem};
const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateItem = [
    check('name').exists().notEmpty(),
    check('lastName').exists().notEmpty(),
    check('DOB').exists().notEmpty(),
    check('email').exists().notEmpty().isEmail(),
    check('address').exists().notEmpty(),
    check('phone').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next),
];

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next),
];

module.exports = {validatorCreateItem, validatorGetItem};
const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateItem = [
    check('name').exists().notEmpty(),
    check('category_id').exists().notEmpty(),
    check('description').exists().notEmpty(),
    check('barcode').exists().notEmpty(),
    check('price_in').exists().notEmpty(),
    check('price_out').exists().notEmpty(),
    check('quantity').exists().notEmpty(),
    check('presentation').exists().notEmpty(),
    check('is_active').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next),
];

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next),
];

module.exports = {validatorCreateItem, validatorGetItem};
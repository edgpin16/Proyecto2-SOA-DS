const models = {
    usersModel : require('./mysql/User'),
    categoriesModel : require('./mysql/Category'),
    productsModel : require('./mysql/Product'),
    peopleModel : require('./mysql/Person'),
    saleModel : require('./mysql/Sale'),
}

module.exports = models;
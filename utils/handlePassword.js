const bcryptjs = require('bcryptjs');

/** 
* Password not encripted
* @param {string} passwordPlain 
*/
const encrypt = async passwordPlain => await bcryptjs.hash(passwordPlain, 10);

/** 
* Password not encripted
* @param {string} passwordPlain 
* Password encripted
* @param {string} hashPassword
*/
const compare = async (passwordPlain, hashPassword) => await bcryptjs.compare(passwordPlain, hashPassword);

module.exports = { encrypt, compare };
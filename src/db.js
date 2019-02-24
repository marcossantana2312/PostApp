const Sequelize = require('sequelize');

//Parametros passados: nome do banco, usuario do banco, senha do banco
//objeto com o host e o dialeto do banco
const sequelize = new Sequelize('postapp', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize : Sequelize,
    sequelize: sequelize
}
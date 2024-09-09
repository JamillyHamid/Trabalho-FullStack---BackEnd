const {sequelize, DataTypes, Sequelize} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('Pessoa', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        telefone: {type: DataTypes.STRING, validate: { is: /^\(\d{2}\)\s?\d{4,5}\-\d{4}$/  }}},{timestamps: false, tableName: 'pessoas'})
    return Pessoa
}
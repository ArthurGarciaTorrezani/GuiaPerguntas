
const Sequelize = require("sequelize");
const connection = new Sequelize("GuiaDPerguntas","root","tutugt93",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;
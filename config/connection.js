// requiring some important information
const Sequelize = require("sequelize");
const kee = require("../key.js");

const sequelizeConnection = new Sequelize("burgers_db", "root", kee.mysql, {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelizeConnection;

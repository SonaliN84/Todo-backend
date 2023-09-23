const dotenv = require("dotenv");
dotenv.config();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo-app", "root",process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;


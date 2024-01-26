import { Sequelize } from "sequelize";

const db = new Sequelize('kasir', 'root', '',{
    host: "localhost",
    dialect: 'mysql',
});

export default db;
import { sequelize } from "../../config/database/database.js";
import { DataTypes } from "sequelize";

const Users = sequelize.define('users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
   name: {
        allowNull: false,
        type: DataTypes.STRING
   },
   accountNumber: {
        allowNull: false,
        type: DataTypes.STRING
   },
   password: {
    allowNull: false,
    type: DataTypes.STRING
   },
   amount: {
    allowNull: false,
    type: DataTypes.FLOAT,
    defaultValue: 1000
   },
   status: {
    allowNull: false,
    defaultValue: true,
    type: DataTypes.BOOLEAN
   },
})

export default Users;
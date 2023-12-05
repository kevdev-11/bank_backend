import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database/database.js";

export const Transfers = sequelize.define('transfers', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    amount: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    senderUserId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    receiverUserId: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
})
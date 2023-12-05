import { Sequelize } from "sequelize";
import { envs } from "../environments/environments.js";

const sequelize = new Sequelize(envs.DB_URI,
    {
        logging: false,
        
    }
);

const authenticate = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

const syncUp = async () => {
    try {
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to synchronize models:", error);
    }
}

export { sequelize, authenticate, syncUp };
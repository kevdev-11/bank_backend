import express from 'express';
import {router as useRouter} from "../modules/users/users.routes.js";
import {router as transfersRouter} from "../modules/transfers_bank/bank.routes.js";
export const router = express.Router(); 
// recordar que esto FUNCIONA es así porque en el archivo de rutas de users, se exporta el router con el nombre de router, por eso se puede usar así

router.use('/users', useRouter);
router.use('/transfers', transfersRouter);

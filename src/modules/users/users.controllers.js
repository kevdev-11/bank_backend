// import { TransfersServices } from "../transfers_bank/bank.service.js";
import { UsersServices } from "./users.services.js";

export const login = async(req, res) => {

    try {
        const { accountNumber, password } = req.body;
        const user = await UsersServices.findUser({ accountNumber, password });

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'user not found'
            })
        }
        
        return res.status(200).json({
            status: 'success',
            message: 'user logged in successfully',
            user
        })
    } catch (error) {
        return res.status(500).json({ 
        status:'server-failure',
        message: 'something went wrong',
        error: error.message });
    }
};

export const signup = async(req, res) => {
    try {
        const { name, password} = req.body;
        // lo que estamos haciendo es asignar un número de cuenta aleatorio,
        // de 6 dígitos, definido por el número máximo que puede ser (999999),
        // recordemos que la función Math.random() nos dará ese número entre 0 y 999999,
        // ya que el limita a el último número 1.000.0000 -1 = 999999
        const accountRandom = Math.floor(Math.random() * 900000)+100000;
        // Math.floor() redondea el número hacia abajo, por ejemplo 1.9 = 1
        const user = await UsersServices.createUser({ name, accountNumber: accountRandom, password})
        
        console.log({ name, accountRandom, password })

        return res.status(200).json({
            status: 'success',
            message: 'user registered successfully',
            user
        })

    } catch (error) {
        return res.status(500).json({ 
        status:'server-failure',
        message: 'something went wrong',
        error: error.message });
    }
};

// export const getHistory = async(req, res) => {
//     try {
//         // const {senderUserId} = req.body;
//         const { senderUserId, receiverUserId } = req.body;
        
//         // await TransfersServices.getHistoryTransfer(id);
    
//         // console.log({senderUserId});

//         const historyAccountsent = await TransfersServices.getHistoryTransfer(senderUserId);
//         const historyAccountrecept = await TransfersServices.getHistoryTransfer(receiverUserId);

//         return res.status(200).json({
//             status: 'success',
//             message: 'history fetched successfully',
//             historyAccountsent,
//             historyAccountrecept
//         })

//     } catch (error) {
//         return res.status(500).json({ 
//         status:'server-failure',
//         message: 'something went wrong',
//         error: error.message });
//     }
// };


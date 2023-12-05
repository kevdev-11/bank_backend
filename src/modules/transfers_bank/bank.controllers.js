import { UsersServices } from "../users/users.services.js";
import { TransfersServices } from "./bank.service.js";

export const transfer = async (req, res) => {
    try {

        const { amount, accountReceiver, accountSender} = req.body;

        const senderPromises = UsersServices.findAccountByNumber(accountSender);
        const receiverPromises = UsersServices.findAccountByNumber(accountReceiver);

        const [sender, receiver] = await Promise.all([
            senderPromises, 
            receiverPromises
        ])

        if (!sender) {
            return res.status(404).json({
                status: 'error',
                message: 'sender account not found or does not exist'
            })
        }
        if (!receiver) {
            return res.status(404).json({
                status: 'error',
                message: 'receiver account not found or does not exist'
            })
        }
        // console.log(receiver);
        
        if (amount > sender.amount) {
            return res.status(400).json({
                status: 'error_transfer',
                message: 'insufficient funds in balance'
            })
        }
        const receiverBalance = amount + receiver.amount;
        const senderBalance = sender.amount - amount;
        
        const updateReceiver = await UsersServices.updateAmount(receiver, receiverBalance);
        const updateSender = await UsersServices.updateAmount(sender, senderBalance);
        const updatedDataPromise = await TransfersServices.createTransfer(amount, sender.id, receiver.id);

        const updatedData = await Promise.all([

            updateReceiver,
            updateSender,
            updatedDataPromise

        ]);

        return res.status(201).json({
            status: 'success',
            message: 'transfer successful',
            data: {
                updatedData,
            }
        
        })
    } catch (error) {
        return res.status(500).json({
            status: 'server-failure',
            message: 'something went wrong',
            error: error.message
        })
    }
}
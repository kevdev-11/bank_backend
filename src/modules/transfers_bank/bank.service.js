// import { where } from "sequelize";
import { Transfers } from "./bank.models.js";

export class TransfersServices {

  static async createTransfer(amount, senderUserId, receiverUserId) {
    try {
      return await Transfers.create({
        amount: amount,
        senderUserId,
        receiverUserId
      });
    } catch (error) {
      console.log(error);
    }
  }

  // static async getHistoryTransfer(senderUserId, receiverUserId) {
  //   try {
  //     return await Transfers.findOne({
  //       where:
  //       {senderUserId: senderUserId,
  //       receiverUserId: receiverUserId
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

}
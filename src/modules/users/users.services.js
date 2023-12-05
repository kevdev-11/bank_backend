import Users from "./users.models.js";

export class UsersServices {

    
    static async findUser(data) {
        try {
            return await Users.findOne({
                where: {
                    status: true,
                    accountNumber: data.accountNumber,
                    password: data.password
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    static async createUser(user) {
        try {
            return await Users.create(user)
        } catch (error) {
            console.log(error);
        }
    }
    
    
    static async findAccountByNumber(accountNumber) {
        
        try {
            return await Users.findOne({
                where: {
                    status: true,
                    accountNumber: accountNumber
                }
            });
            
        } catch (error) {
            console.log(error);
        }
    }
    
    static async updateAmount(accountNumber, amount) {
        try {
            return await accountNumber.update({
                amount: amount
            })
        } catch (error) {
            console.log(error);
        }
    }
}
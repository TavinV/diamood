import mongoose from "mongoose";
import AdminAccountModel from "../models/AdminAccountModel.js";
import { hashContent } from "../utils/Cryptography.js";
import logger from "../utils/Logger.js";

/** * Service to handle admin account operations. * **/

class AdminAccountServices {
    async createAdminAccount(adminAccount) {
        try {
            const hashedPassword = await hashContent(adminAccount.password);
            const adminAccountModel = new AdminAccountModel({
                name: adminAccount.name,
                email: adminAccount.email,
                password: hashedPassword[1],
                salt: hashedPassword[0]
            });
            const savedAdminAccount = await adminAccountModel.save();
            logger.info(`Admin account created: ${savedAdminAccount.email}`);
            return [savedAdminAccount, 201];
        }
        catch (error) {
            logger.error(`Error creating admin account: ${error.message}`);
            if (error instanceof mongoose.Error.ValidationError) {
                return [null, 400]; // Bad Request for validation errors
            } else if (error.code === 11000) { // Duplicate key error
                return [null, 409];
            }
            return [null, 500];
        }
    }

    async getAdminAccount(email) {
        try {
            const adminAccount = await AdminAccountModel.findOne({ email: email });
            if (!adminAccount) {
                return [null, 404];
            }
            return [adminAccount, 200];
        } catch (error) {
            logger.error(`Error fetching admin account: ${error.message}`);
            return [new Error("Internal server error"), 500];
        }
    }

    async login(email, password) {
        try {
            const adminAccount = await AdminAccountModel.findOne({ email: email });
            if (!adminAccount) {
                return [null, 404]; // Not Found
            }

            const hashedPassword = adminAccount.password;
            const salt = adminAccount.salt;

            const [_, hashedInputPassword] = hashContent(password, salt);


            if (hashedInputPassword !== hashedPassword) {
                return [null, 401]; // Unauthorized
            }

            return [adminAccount, null]; // OK
        }
        catch (error) {
            logger.error(`Error during login: ${error.message}`);
            return [new Error("Internal server error"), 500];
        }
    }

}

export default new AdminAccountServices();
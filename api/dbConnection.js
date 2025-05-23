import mongoose from "mongoose";
import logger from './utils/Logger.js';

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { dbName: "diamood_db" });

    } catch (err) {
        logger.error("Conexão com banco de dados falhou", { err })
        process.exit(1); // Finaliza o processo em caso de erro
    }
};

export default connectDB;
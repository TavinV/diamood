import app from "./app.js";
import logger from "./utils/Logger.js";
import connectDb from "./dbConnection.js";

const port = process.env.port

connectDb().then(() => {
    console.log("Conexão com o banco de dados estabelecida")
    logger.info("Conexão com o banco de dados estabelecida")

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`)
        logger.info(`Servidor rodando na porta ${port}`)
    }
    ).on('error', (err) => {
        console.error("Erro ao iniciar o servidor:", err)
        logger.error("Erro ao iniciar o servidor:", err)
    });
}).catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err)
    logger.error("Erro ao conectar ao banco de dados:", err)
})

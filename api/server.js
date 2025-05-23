import app from "./app.js";
import logger from "./utils/Logger.js";
import connectDb from "./dbConnection.js";

const port = process.env.port

app.listen(port, () => {
    console.log("Servidor ativo na porta " + port)
    logger.info("Servidor ativo na porta " + port)
})
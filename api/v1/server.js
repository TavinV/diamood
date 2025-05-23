import app from "./app.js";
import logger from "./utils/Logger.js";

const port = process.env.port
app.listen(port, () => {
    logger.info("Servidor ativo na porta " + port)
});
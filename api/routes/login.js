import express from 'express';
import AdminAccountServices from '../services/AdminAccountServices.js';
import { signJwt } from '../auth/JwtAuth.js';
import logger from '../utils/Logger.js';
import ApiResponse from '../utils/ApiResponse.js';

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return ApiResponse.BADREQUEST(res, "Email and senha são obrigatórios.", null, 'DIAERR-0001');
        }
        const [adminAccount, loginError] = await AdminAccountServices.login(email, password);

        if (loginError) {
            if (loginError != 500) {
                return ApiResponse.NOTFOUND(res, "Login e(ou) senha inválidos.", null, 'DIAERR-0001');
            } else {
                logger.error(`Login error: ${loginError}`);
                return ApiResponse.ERROR(res, "Erro interno do servidor.", null, 'DIAERR-9001');
            }
        }

        const token = signJwt({ email: adminAccount.email, id: adminAccount._id });
        return ApiResponse.OK(res, { token }, "Login realizado com sucesso.", null);

    } catch (error) {
        logger.error(`Error: ${error.message}`);
        return ApiResponse.ERROR(res, "Erro interno do servidor.", null, 'DIAERR-9001');
    }
});

export default loginRouter;
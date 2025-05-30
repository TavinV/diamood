import express from 'express';
import validateJwt from '../middleware/validateJwt.js';
import ApiResponse from '../utils/ApiResponse.js';

const adminRouter = express.Router();
adminRouter.use(validateJwt);

adminRouter.get('/', (req, res) => {
    try {
        // Aqui você pode adicionar a lógica para retornar informações do administrador
        // Por exemplo, retornar o usuário autenticado
        return ApiResponse.OK(res, { user: req.user }, "Admin information retrieved successfully.", null);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return ApiResponse.ERROR(res, "Internal server error.", null, 'DIAERR-9001');
    }
}
);

export default adminRouter;

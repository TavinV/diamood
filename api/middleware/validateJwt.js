import { verifyJwt } from "../auth/JwtAuth.js";
import ApiResponse from "../utils/ApiResponse.js";

const validateJwt = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) {
        return ApiResponse.UNAUTHORIZED(res, "Token não fornecido.", null, 'DIAERR-0002');
    }
    try {
        let [decoded, validateJWTError] = verifyJwt(token.split(' ')[1]);
        if (validateJWTError) {
            return ApiResponse.UNAUTHORIZED(res, "Token inválido.", null, 'DIAERR-00002');
        }

        req.user = decoded;
        next();
    } catch (error) {
        return ApiResponse.ERROR(res, "Erro ao validar token.", null, 'DIAERR-9001');
    }
};

export default validateJwt;
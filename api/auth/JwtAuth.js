import jwt from 'jsonwebtoken';

const signJwt = (user) => {
    const SECRET = process.env.SECRET || "Produção"; // Caso o arquivo .env esteja inutilizado, usamos "Produção" como segredo (para testes)
    const token = jwt.sign(user, SECRET, { expiresIn: '7d' });

    return token;
}

const verifyJwt = (token) => {
    const SECRET = process.env.SECRET || "Produção"; // Caso o arquivo .env esteja inutilizado, usamos "Produção" como segredo (para testes)
    let result = []

    jwt.verify(token, SECRET, (err, decoded) => {
        if (!decoded) {
            result = [null, 401]
        }
        if (decoded && !err) {
            result = [decoded, null]
        }
    })

    return result
}

export { signJwt, verifyJwt }
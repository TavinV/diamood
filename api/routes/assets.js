import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import ApiResponse from '../utils/ApiResponse.js';

const assetsRouter = express.Router();

assetsRouter.get('/:filename', async (req, res) =>{
    const filename = req.params.filename
    const filePath = path.join(process.cwd(), './', 'assets', filename)

    try {
        await fs.access(filePath); // Lança erro se o arquivo não existir
        res.sendFile(filePath);
    } catch (err) {
        return ApiResponse.NOTFOUND(res, `O recurso ${filename} (${filePath}) não foi encontrado.`)
    }
})

export default assetsRouter;
class ApiResponse {
    // 2xx Success
    static OK(res, data = null, message = "Sucesso", internalCode = null) {
        return res.status(200).json({
            success: true,
            message,
            data,
            ...(internalCode && { internalCode }),
            timestamp: new Date().toISOString(),
        })
    }

    static CREATED(res, data = null, message = "Recurso criado com sucesso", internalCode = null) {
        return res.status(201).json({
            success: true,
            message,
            data,
            ...(internalCode && { internalCode }),
            timestamp: new Date().toISOString(),
        })
    }

    static ACCEPTED(res, data = null, message = "Solicitação aceita", internalCode = null) {
        return res.status(202).json({
            success: true,
            message,
            data,
            ...(internalCode && { internalCode }),
            timestamp: new Date().toISOString(),
        })
    }

    static NOCONTENT(res, message = "Sem conteúdo", internalCode = null) {
        return res.status(204).json({
            success: true,
            message,
            data: null,
            ...(internalCode && { internalCode }),
            timestamp: new Date().toISOString(),
        })
    }

    // 4xx Client Errors
    static BADREQUEST(res, message = "Requisição inválida", data = null, internalCode = null) {
        return res.status(400).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-400',
            timestamp: new Date().toISOString(),
        })
    }

    static UNAUTHORIZED(res, message = "Não autorizado", data = null, internalCode = null) {
        return res.status(401).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-401',
            timestamp: new Date().toISOString(),
        })
    }

    static FORBIDDEN(res, message = "Acesso negado", data = null, internalCode = null) {
        return res.status(403).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-403',
            timestamp: new Date().toISOString(),
        })
    }

    static NOTFOUND(res, message = "Recurso não encontrado", data = null, internalCode = null) {
        return res.status(404).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-404',
            timestamp: new Date().toISOString(),
        })
    }

    static METHODNOTALLOWED(res, message = "Método não permitido", data = null, internalCode = null) {
        return res.status(405).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-405',
            timestamp: new Date().toISOString(),
        })
    }

    static CONFLICT(res, message = "Conflito", data = null, internalCode = null) {
        return res.status(409).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-409',
            timestamp: new Date().toISOString(),
        })
    }

    static VALIDATIONERROR(res, message = "Erro de validação", errors = null, internalCode = null) {
        return res.status(422).json({
            success: false,
            message,
            errors,
            internalCode: internalCode || 'API-422',
            timestamp: new Date().toISOString(),
        })
    }

    static TOOMANYREQUESTS(res, message = "Muitas requisições", data = null, internalCode = null) {
        return res.status(429).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-429',
            timestamp: new Date().toISOString(),
        })
    }

    // 5xx Server Errors
    static ERROR(res, message = "Erro interno do servidor", data = null, internalCode = null) {
        return res.status(500).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-500',
            timestamp: new Date().toISOString(),
        })
    }

    static NOTIMPLEMENTED(res, message = "Funcionalidade não implementada", data = null, internalCode = null) {
        return res.status(501).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-501',
            timestamp: new Date().toISOString(),
        })
    }

    static SERVICEUNAVAILABLE(res, message = "Serviço indisponível", data = null, internalCode = null) {
        return res.status(503).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'API-503',
            timestamp: new Date().toISOString(),
        })
    }

    // Payment Errors (4xx/5xx)
    static PAYMENTREQUIRED(res, message = "Pagamento necessário", data = null, internalCode = null) {
        return res.status(402).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'PAY-402',
            timestamp: new Date().toISOString(),
        })
    }

    static INSUFFICIENTFUNDS(res, message = "Fundos insuficientes", data = null, internalCode = null) {
        return res.status(403).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'PAY-403',
            timestamp: new Date().toISOString(),
        })
    }

    static PAYMENTDECLINED(res, message = "Pagamento recusado", data = null, internalCode = null) {
        return res.status(422).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'PAY-422',
            timestamp: new Date().toISOString(),
        })
    }

    static PAYMENTPROCESSINGERROR(res, message = "Erro no processamento do pagamento", data = null, internalCode = null) {
        return res.status(500).json({
            success: false,
            message,
            data,
            internalCode: internalCode || 'PAY-500',
            timestamp: new Date().toISOString(),
        })
    }

    // Aliases para compatibilidade
    static ALREADYEXISTS = ApiResponse.CONFLICT;
    static DELETED = ApiResponse.NOCONTENT;
}

export default ApiResponse;
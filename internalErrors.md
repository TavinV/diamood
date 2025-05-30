# Sistema de Códigos de Erro (DIAERR)

Este documento descreve os códigos de erro internos da API de gerenciamento de ingressos. Cada erro possui um identificador único no formato `DIAERR-XXXX`.

---

## 🔍 Legenda
- **Código**: Identificador único do erro (ex: `DIAERR-0201`)
- **Descrição**: Contexto do erro e possíveis causas
- **Categoria**: Área do sistema relacionada

---

## 📂 Categorias

### 🔐 Autenticação e Contas
| Código        | Descrição                                      |
| ------------- | ---------------------------------------------- |
| `DIAERR-0001` | Credenciais inválidas (email/senha incorretos) |
| `DIAERR-0002` | Token de acesso inválido                       |
| `DIAERR-0003` | Token expirado                                 |
| `DIAERR-0004` | Acesso negado (usuário não é administrador)    |
| `DIAERR-0005` | Conta temporária expirada                      |
| `DIAERR-0006` | Limite de contas temporárias atingido          |

### 👥 Usuários
| Código        | Descrição                     |
| ------------- | ----------------------------- |
| `DIAERR-0101` | CPF inválido ou já cadastrado |
| `DIAERR-0102` | E-mail inválido ou em uso     |
| `DIAERR-0103` | Dados pessoais incompletos    |

### 🎟️ Ingressos
| Código        | Descrição                             |
| ------------- | ------------------------------------- |
| `DIAERR-0201` | Limite de ingressos por lote excedido |
| `DIAERR-0202` | Ingresso esgotado                     |
| `DIAERR-0203` | Tipo de ingresso inválido             |

### 💳 Pagamento
| Código        | Descrição                   |
| ------------- | --------------------------- |
| `DIAERR-0301` | Falha ao gerar cobrança PIX |
| `DIAERR-0302` | Pagamento não confirmado    |

### 🎤 Eventos
| Código        | Descrição                 |
| ------------- | ------------------------- |
| `DIAERR-0401` | Evento não encontrado     |
| `DIAERR-0402` | Data do evento no passado |

### ⚠️ Críticos (Sistema)
| Código        | Descrição                         |
| ------------- | --------------------------------- |
| `DIAERR-9001` | Banco de dados offline            |
| `DIAERR-9002` | Serviço de pagamento indisponível |

---

## 📌 Exemplo de Uso
```json
{
  "error": {
    "code": "DIAERR-0201",
    "message": "Limite de ingressos por lote excedido",
    "details": "O lote 'VIP' atingiu o máximo de 100 unidades"
  }
}
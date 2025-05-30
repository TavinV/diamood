import mongoose from "mongoose";
import Ingresso from "./IngressoModel";

const ingressoSchema = Ingresso.schema; // Importando o schema de Ingresso

const showSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    data: {
        type: Date,
        required: true
    },
    horario: {
        type: String,
        required: true,
        trim: true
    },
    local: {
        type: String,
        required: true,
        trim: true
    },
    ingressos: [ingressoSchema], // Array de ingressos com estrutura definida
    ativo: {
        type: Boolean,
        default: true
    }
});

const Show = mongoose.model("Show", showSchema);
export default Show;
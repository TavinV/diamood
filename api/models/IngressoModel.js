import mongoose from "mongoose";

const ingressoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    valor: {
        type: Number,
        required: true,
        min: 0
    },
    descricao: {
        type: String,
        trim: true
    },
    quantidadeDisponivel: {
        type: Number,
        required: true,
        min: 0
    },
    quantidadeMaximaPorCliente: {
        type: Number,
        default: null // null significa sem limite
    }
});

const Ingresso = mongoose.model("Ingresso", ingressoSchema);
export default Ingresso;
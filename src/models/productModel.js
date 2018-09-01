import mongoose from 'mongoose';
const Schema = mongoose.Schema

const productModel = Schema({
    name:{
        type: String,
        required: 'Nome do produto obrigatório'
    },
    weight: {
        type: Number,
        required: 'Peso obrigatório'
    },
    quantity: {
        type: Number,
        required: false
    },
})

export default productModel;
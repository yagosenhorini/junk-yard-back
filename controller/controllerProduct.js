const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Product = require('../model/modelProduct.js');

router.get('/products', (req, res) => {
    Product.find({}, function (err, products) {
        if (err) {
            return res.status(500).send("Ocorreu um erro ao listar os produtos.");
        }
        res.status(200).send(products);
    });
});

router.post('/products', (req, res) => {
    Product.create({
        name: req.body.name,
        weight: req.body.weight,
        price: req.body.price
    },
        function (err, product) {
            if (err) {
                return res.status(500).send("Erro ao adicionar um novo produto.");
            }
            res.status(200).send(product);
        });
});

router.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            return res.status(500).send('Ocorreu um erro ao buscar o produto específico');
        }
        if (!product) {
            return res.status(404).send('Produto não encontrado');
        }
        res.status(200).send(product);
    });
});

router.put('/products/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, product) {
        if (err) {
            return res.status(500).send('Erro ao atualizar o produto');
        }
        res.status(200).send(product);
    });
});

router.delete('/products/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, function (err, product) {
        if (err) {
            return res.status(500).send('Erro ao deletar o produto');
        }
        res.status(200).send(`${product.name} foi deletado com sucesso`);
    });
});

module.exports = router;
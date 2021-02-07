import mongoose from 'mongoose';
import createHttpError from 'http-errors'
import productModel from '../models/productModel';

const Product = mongoose.model('Product', productModel);

export function addNewProduct(req, res) {
  const {
    name,
    price,
    weight
  } = req.body;
  let newProduct = new Product(req.body)
  newProduct.save((error, product) => {
    if (!name || !price || !weight) {
      res.status(400)
        .json({
          status: '400',
          message: error.message
        })
    } else if (error) {
      res.status(500)
        .json({
          status: '500',
          message: error.message
        })
    }
    res.json(product);
    console.log('salvo', product);
  })
}

export function getProducts(req, res) {
  Product.find({}, (error, products) => {
    if (error) {
      console.log('Error status: ', error.status)
      console.log('Message: ', error.message)
      res.status(error.status || 500);
      res.json({
        message: error.message
      });
    }
    res.json(products)
  })
}

export function getOneProduct(req, res) {
  Product.findById(req.params.id, (error, product) => {
    if (error) {
      console.log('erre', res.statusCode)
      res.status(404)
        .json({
          status: 404,
          message: error.message || `Não foi possível encontrar o produto solicitado`,
        });
    }
    // if (!product.id) throw createHttpError(404, `Produto não encontrado`);
    res.json(product)
  })
}

export function updateProduct(req, res) {
  Product.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  }, (error, product) => {
    if (error) {
      res.status(400)
        .json({
          status: 400,
          message: error.message
        });
    }
    res.json(product)
    console.log(product)
  })
}

export function deleteProduct(error, req, res) {
  Product.deleteOne({
    _id: req.params.id
  }, (error, product) => {
    if (error) {
      res.status(400)
        .json({
          status: 400,
          message: error.message
        });
    }
    res.json(product);
  })
}
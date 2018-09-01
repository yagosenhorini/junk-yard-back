import mongoose from 'mongoose';
import productModel from '../models/productModel';

const Product = mongoose.model('Product', productModel);

export function addNewProduct(req, res){
    let newProduct = new Product(req.body)
    newProduct.save((error, product)=>{
        if(error){
            res.json(error);
        }
        res.json(product);
        console.log(product);
    })
}

export function getProducts(req, res){
    Product.find({},(error, products)=>{
        if(error){
            res.json(error)
        }
        res.json(products)
        console.log(products)
    })
}

export function getOneProduct(req, res){
    Product.findById(req.params.id, (error, product)=>{
        if(error){
            res.json(error);
        }
        res.json(product)
        console.log(product)
    })
}

export function updateProduct(req, res){
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (error, product)=>{
        if(error){
            res.json(error)
        }
        res.json(product)
        console.log(product)
    })
}

export function deleteProduct(req, res){
    Product.deleteOne({_id: req.params.id}, (error, product)=>{
        if(error){
            res.json(error)
        }
        res.json(product)
    })
}
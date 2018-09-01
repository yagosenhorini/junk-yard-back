import {addNewProduct, getProducts, getOneProduct, updateProduct, deleteProduct} from '../controllers/productController'

const routes = app =>{
    app.route('/v1/products')
        .get(getProducts)
        .post(addNewProduct)

    app.route('/v1/products/:id')
        .get(getOneProduct)
        .put(updateProduct)
        .delete(deleteProduct)
}
export default routes;
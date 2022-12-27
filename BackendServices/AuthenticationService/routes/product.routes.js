const app = require('express');
const productController = require('../controllers/product.controller.js')
const productRouter = app.Router();

productRouter.get("/", productController.allProducts)
productRouter.post("/create", productController.createProduct)
productRouter.put("/update/:id", productController.updateProduct)
productRouter.delete("/delete/:id", productController.deleteProduct)

module.exports = productRouter
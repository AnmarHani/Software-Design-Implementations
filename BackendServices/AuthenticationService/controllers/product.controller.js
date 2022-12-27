const axios = require('axios');

const allProducts = async (req, res) => {
    response = await axios.get("http://products-service:8080/products/")
    res.json({
        "data": response.data
    })
}
const createProduct = async (req, res) => {
    response = await axios.post("http://products-service:8080/products/create/", req.body)
    res.json({
        "data": response.data
    })
}
const updateProduct = async (req, res) => {
    response = await axios.put(`http://products-service:8080/products/update/${req.params.id}`, req.body)
    res.json({
        "data": response.data
    })
}
const deleteProduct = async (req, res) => {
    response = await axios.delete(`http://products-service:8080/products/delete/${req.params.id}`)
    res.json({
        "data": response.data
    })
}

module.exports = {
    allProducts,
    createProduct,
    updateProduct,
    deleteProduct
}
const Product = require('../models/product.model');

const getAllProducts = async(req, res) =>{
  try{
    const products = await Product.find();
    res.json(products);
  } catch (error) {
        res.status(503).json({fatal: error.message});
  }

}

const getByDepartment = async (req,res) =>{
    const {department} = req.params;

    const products = await Product.sameDepartment(department);
    res.json(products);

}

const createProduct = async (req, res) => {
    try {
        // Crear el producto
        const newProduct = await Product.create(req.body);

        // Devolver el objeto completo (incluyendo createdAt y updatedAt) en la respuesta
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
};

const updateProduct = async (req, res) => {
   const {productId} = req.params;
    
    try {
        // Actualizar producto
        const updatedProduct = await Product.findByIdAndUpdate(productId,req.body, {new:true});

        // Devolver el objeto completo (incluyendo createdAt y updatedAt) en la respuesta
        res.status(201).json(updatedProduct);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}
const deleteProduct = async (req, res) => {
    const {productId} = req.params;
     
     try {
         // Actualizar producto
         const deletedProduct = await Product.findByIdAndUpdate(productId,req.body);
 
         // Devolver el objeto completo (incluyendo createdAt y updatedAt) en la respuesta
         res.status(201).json(deletedProduct);
     } catch (error) {
         res.status(503).json({ fatal: error.message });
     }

    }



module.exports= {getAllProducts, createProduct, updateProduct,deleteProduct, getByDepartment};
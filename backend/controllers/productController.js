import Product from "../models/productModels.js";
import asyncHandler from "express-async-handler";


const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
})

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
  getProduct,
  getProductById
}
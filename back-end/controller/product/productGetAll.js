import { set } from "mongoose";
import Product from "../../models/Product.js";

export default async function productGetAll(req, res) {
  try {
    const product = await Product.find();
    const allProducts = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

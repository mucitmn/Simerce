import Product from "../../models/Product.js";

export default async function productGetById(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(Product);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.mesage });
  }
}

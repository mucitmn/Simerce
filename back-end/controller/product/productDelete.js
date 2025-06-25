import Product from "../../models/Product.js";

async function productDelete(req, res) {
  try {
    const product = await Product.find(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({ message: "Product succesfully removed." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export default productDelete;

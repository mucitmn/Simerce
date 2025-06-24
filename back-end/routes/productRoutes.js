import express from "express";
import productDelete from "../controller/product/productDelete.js";
import productGetall from "../controller/product/productGetAll.js";
import productGetById from "../controller/product/productGetById.js";
import productPost from "../controller/product/productPost.js";
import productUpdate from "../controller/product/productUpdate.js";

const router = express.Router();

// GET all products
router.get("/product", productGetall);

// GET product by ID
router.get("/product/:id", productGetById);

// DELETE product by ID
router.delete("/product/:id", productDelete);

// CREATE new product
router.post("/product", productPost);

// UPDATE product by ID
router.put("/product/:id", productUpdate);

export default router;
import Product from "../../models/Product.js";

export default async function productUpdate(req,res){  
    const productUpdate = new Product.findByIdAndUpdate(req.params._id);
    
}
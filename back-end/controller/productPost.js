import Product from "../models/product.js";

export async function productPost(req,res){
  try {
    
    const product = validateResBody(req.body);

    await product.save()
    res.status(200).json(product)

  } catch (error) {
    console.error("Product add req is failed : " , error)
    res.status(400).json({ message: error.message })
  }
};


const validateResBody = (resBody) =>{
  const {title,description,price,inStock,images,category} = resBody;
    if (!title || !price || !category){
      throw new Error("title, price, and category fields are required!");
    }
    return new Product({
      title ,
      description,
      price,
      inStock,
      images : images || [],
      category
    })

}
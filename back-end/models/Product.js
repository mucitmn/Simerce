import mongoose from "mongoose";

const {Schema}  = mongoose;

/**
 * Product data fields:
 * 
 * |-- title       : Required  → String  
 *     The name/title of the product.
 * 
 * |-- description : Optional  → String  
 *     Detailed information about the product.
 * 
 * |-- price       : Required  → Number  
 *     The price of the product.
 * 
 * |-- comment     : Optional  → Array  
 *     An array of comment objects. Each object contains:
 *       |→ body : String → The content of the comment.
 *       |→ date : Date   → The date the comment was posted.
 * 
 * |-- inStock     : Optional  → Boolean  
 *     Product availability. Defaults to `true`.
 * 
 * |-- images      : Optional  → Array  
 *     An array of image URLs in string format.
 * 
 * |-- category    : Required  → String  
 *     Product category.  
 *     TODO: Replace with reference after creating category schema & API.
 * 
 * |-- createdAt   : Auto      → Date  
 *     Automatically generated creation date.
 */

const productShema = new Schema({
    title : { type : String , required : true },
    description : {type : String } ,
    price : { type : Number, required : true},
    comment : [{
        body : String,
        date : {type : Date , default : Date.now}
    }],
    inStock : {type : Boolean , default : true },
    images : [String],
    category : {type : String , required:true},
    createdAt : {type : Date , default : Date.now}
})

const Product = mongoose.model(Product,productShema)

export default Product;
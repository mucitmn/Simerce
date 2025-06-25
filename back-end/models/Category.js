import mongoose from "mongoose";

const categoryShema = new mongoose.Schema({
  name: {
    type: String,
    reuqired: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
});

const Category = mongoose.model("Category", categoryShema);

export default Category;

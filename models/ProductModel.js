const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")

const arraySchema = new mongoose.Schema(
  {
    id : {type : String},
    img : { type: String, required: true },
    productName : { type: String, required : true },
    price: { type: Number, required: true },
    desc : { type: String, required: true },
  }

);

const productSchema =  new mongoose.Schema({
  Products : [arraySchema]  })

const ProductModel= mongoose.model("products", productSchema)

module.exports=ProductModel;  
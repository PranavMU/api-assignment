const mongoose = require("mongoose")

const db3 = new mongoose.Schema({
    customer_id:{
    type:String,
    require:true
    
 },
 customer_name:{
    type:String,
    require:true
 },
 email:{
   type:String,
   require:true,
   unique:true
 }


})
const Customermodal = mongoose.model("customertable",db3)
module.exports= Customermodal
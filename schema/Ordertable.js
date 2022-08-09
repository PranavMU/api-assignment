const mongoose = require("mongoose")

const db2 = new mongoose.Schema({
    customer_id:{
    type:String,
    require:true
    
 },
 inventory_type:{
    type:String,
    require:true
 },
 item_name:{
   type:String,
   require:true
 },
 quantity:{
   type:Number,
   require:true
 }

})
const Ordermodal = mongoose.model("ordertable",db2)
module.exports= Ordermodal
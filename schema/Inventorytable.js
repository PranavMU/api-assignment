const mongoose = require("mongoose")

const db1 = new mongoose.Schema({
   inventory_id:{
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
 available_quantity:{
   type:Number,
   require:true
 }

})
const Inventmodal = mongoose.model("inventorytable",db1)
module.exports= Inventmodal
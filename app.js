const express=require("express");
var path = require('path')

const mongoose=require("mongoose");
const dotenv = require('dotenv');
const Inventmodal = require("./schema/Inventorytable")
const Customermodal = require("./schema/Customertable")
const Ordermodal = require("./schema/Ordertable")
const bodyParser = require("body-parser");
const app=express();
//middleware


// parsers

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// listening port
app.listen(process.env.PORT,()=>{
    console.log("server started @ : " +process.env.PORT);
});
// db connection
mongoose.connect(process.env.DATABASE);

app.get("/",(req,res)=>{
    res.send("backend works");
});


app.post("/inventadd",(req,res)=>{ //3
    try{
        Inventmodal.create({inventory_id:req.body.inventory_id,inventory_type:req.body.inventory_type,item_name:req.body.item_name,available_quantity:req.body.available_quantity
        }).then((data)=>{
            res.status(200).send({"status":"Successfully added",data})
        })
    }
    catch(err){
        res.status(404).send("error")
    }
  })

  app.get("/inventadd",(req,res)=>{//4
    Inventmodal.find({}).then((user)=>{
    if(user.length){
      res.send(user)
    }else{
      res.send("empty")
    }
  
    })
  })


//customer
app.post("/customer",(req,res)=>{ //3
    try{
        Customermodal.create({customer_id:req.body.customer_id,inventory_id:req.body.inventory_id,quantity:req.body.quantity
        }).then((data)=>{
            res.status(200).send({"status":"customer added",data})
        })
    }
    catch(err){
        res.status(404).send("error")
    }
  })
  app.get("/customer",(req,res)=>{//4
    Customermodal.find({}).then((user)=>{
    if(user.length){
      res.send(user)
    }else{
      res.send("empty")
    }
  
    })
  })

  //ordertable
  app.post("/orders",(req,res)=>{ //3
    try{
        Ordermodal.create({customer_id:req.body.customer_id,inventory_id:req.body.inventory_id,quantity:req.body.quantity
        }).then((data)=>{
            res.status(200).send({"status":"order added",data})
        })
    }
    catch(err){
        res.status(404).send("error")
    }
  })
  app.get("/orders",(req,res)=>{//4
    Ordermodal.find({}).then((user)=>{
    if(user.length){
      res.send(user)
    }else{
      res.send("empty")
    }
  
    })
  })
  app.post("/orders",(req, res) => {
    const array = Inventmodal.find({inventory_id: req.body.inventory_id});
    if (array.available_quantity < req.body.quantity) {
      res.send("Not Available");
    } else {
      var updated = array[0].available_quantity - req.body.quantity;
     Inventmodal.updateOne(
        {inventory_id: req.body.inventory_id},
        { $set: {available_quantity: updated} }
      )
      try {
        res.send(data);
      } catch (err) {
        console.log(err);
      }
    }
  })
  app.get("/orders",(req,res)=>{//4
    Inventmodal.find({}).then((user)=>{
    if(user.length){
      res.send(user)
    }else{
      res.send("empty")
    }
  
    })
  })
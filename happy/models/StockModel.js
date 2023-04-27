const mongoose = require('mongoose');

const poststockschema = new mongoose.Schema({
   
    ItemId:{
        type:String,
        required:true
    },
    ItemName:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    SupplierId:{
        type:String,
        required:true
    },
    Model:{
        type:String,
        required:true 
    }
   
});

module.exports = mongoose.model('StockManagement',poststockschema);
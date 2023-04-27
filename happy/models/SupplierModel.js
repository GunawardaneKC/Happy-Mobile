const mongoose = require('mongoose');

const postsupplierschema = new mongoose.Schema({
   
    SupplierID:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    ItemList:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('SupplierManagement',postsupplierschema);
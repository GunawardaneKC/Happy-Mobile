const mongoose = require('mongoose');

const postorderSchema = new mongoose.Schema({
     
    Category:{
        type:String,
    },
    Brand:{
        type:String,
    }
    
});

module.exports = mongoose.model('category',postorderSchema);
var mongoose = require('mongoose');

module.exports = mongoose.model('Add',{
    FromUser:{
        type:ObjetId,
        ref:'User'
    },
    Title:{
        type:String,
        required:true
    },
    Text:{
        type:String,
        required:true
    },
    ImageDataUrl:{
        type:String,
        required:true
    },
    CategoryId:{
      type:Number
    },
    TownId:{
        type:Number
    }
});
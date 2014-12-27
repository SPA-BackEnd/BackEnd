var mongoose = require('mongoose');

module.exports = mongoose.model('users',{
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        validate:/([\w])+([_\-\.\d\w])*@+([\w])+([_\-\.\d\w])*(\.)+([\w]{2,})+/g,
        required:true
    },
    phone:{
        type:String
    },
    town:{
        type:Number
    }
});
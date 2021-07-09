const mongoose=require('mongoose');

const CocaSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    precio:{
        type:Number,
        required:true
    },
    existencia:{
        type:Number,
        default:5
    },
    fecha:{
        type:Date,
        default:Date.now
    }
})
const Coca=mongoose.model('Coca',CocaSchema);

module.exports=Coca;


const mongoose=require('mongoose')
const{Schema}=mongoose
const UserSchema=new Schema({
    fecha:String,
    maquina:String,
    nombre:String,
    ciudad:String,
    parte1:String,
    parte2:String,
    parte3:String,
    parte4:String,
    parte5:String,
    parte6:String,
    parte7:String,
    parte8:String,
    parte9:String,
    parte10:String,
    cantidad1:Number,
    cantidad2:Number,
    cantidad3:Number,
    cantidad4:Number,
    cantidad5:Number,
    cantidad6:Number,
    cantidad7:Number,
    cantidad8:Number,
    cantidad9:Number,
    cantidad10:Number

   
},{
    timestamps:true
})
module.exports=mongoose.model('user', UserSchema)
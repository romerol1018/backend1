const UserCtrl={}
const User=require('../models/usuario.models')


//peticion .get ok funcionando----------------------------------------------------------
UserCtrl.obtenermaquina=async(req,res)=>{
  const maquina=await User.find()
  res.json(maquina)
}//----------------------------------------------------------------------------------------



//peticion .crear  ok funcionando ---------------------------------------------------------
UserCtrl.crearmaquina=async(req,res)=>{
   const {fecha,maquina,nombre,ciudad,parte1,parte2,parte3,parte4,parte5,parte6,parte7,parte8,parte9,parte10,cantidad1,
            cantidad2,cantidad3,cantidad4,cantidad5,cantidad6,cantidad7,cantidad8,cantidad9,cantidad10}=req.body
   const nuevamaquina=new User({
       fecha,
       maquina,
       nombre,
       ciudad,
       parte1,
       parte2,
       parte3,
       parte4,
       parte5,
       parte6,
       parte7,
       parte8,
       parte9,
       parte10,
       cantidad1,
       cantidad2,
       cantidad3,
       cantidad4,
       cantidad5,
       cantidad6,
       cantidad7,
       cantidad8,
       cantidad9,
       cantidad10
       

   })
   await nuevamaquina.save()
   res.json({
       mensaje:'solicitud guardada correctamente'
   })
}
//---------------------------------------------------------------------------------------
//peticion .obtener solo un codigo
UserCtrl.obtenermaquinaunico=async(req,res)=>{
    const id=req.params.id
    const maquina=await User.findById({_id:id})
    res.json(maquina)
}//_---------------------------------------------------------------------------------------------
//peticion .actualizar codigo funcionando ok
UserCtrl.actualizarmaquina=async(req,res)=>{
  const id=req.params.id
  await User.findByIdAndUpdate({_id:id},req.body)
  res.json({
      mensaje:"solicitud Actualizada"
  })
}//------------------------------------------------------------------------------------
//peticion .eliminar codigo funcionando ok
UserCtrl.eliminarmaquina=async(req,res)=>{
    const id=req.params.id
    await User.findByIdAndDelete({_id:id})
    res.json({
        mensaje:"Solicitud eliminada satisfactoriamente"
    })
}



module.exports=UserCtrl
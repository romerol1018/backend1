const {Router}=require('express')
const route=Router()
const UserCtrl=require('../controllers/user.controller')


route.get('/obtener',UserCtrl.obtenermaquina)
route.get('/obtener/:id',UserCtrl.obtenermaquinaunico)
route.post('/crear',UserCtrl.crearmaquina)
route.put('/actualizar/:id',UserCtrl.actualizarmaquina)
route.delete('/eliminar/:id',UserCtrl.eliminarmaquina)

module.exports=route
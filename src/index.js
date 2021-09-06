const express=require('express')
const app=express()
const morgan=require('morgan')
const bodyparser=require('body-parser')
const cors=require('cors')
require('./database')

app.set('Port',3000)
// middlewares
app.use(morgan('dev'))
//el body parser y express.json nos sirve para recibir y traducir lo que nos envia el cliente, ya que desde el frontend se va a mandar los datos en formato json
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.json())
app.use(cors({origin:('*')}))
app.use('/maquina',require('./routes/user.route'))





app.listen(app.get('Port'),()=>{
    console.log('servidor escuchando por el puerto',app.get('Port'))
})
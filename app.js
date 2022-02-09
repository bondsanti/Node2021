const express = require('express')
const path = require('path')
const router = require('./router/myEjsRouter')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(cookieParser())
app.use(session({secret:"mysession",resave:false,saveUninitialized:false}))
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(express.static(path.join(__dirname,'public')))



app.listen(3030,()=>{
    console.log("Server Start in port 3030")
})
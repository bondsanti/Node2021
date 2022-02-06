const express = require('express')
const router = require('./router/myRouter')
const app = express()


app.use(router)
app.listen(3030,()=>{
    console.log("Server Start in port 3030")
})
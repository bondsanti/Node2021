const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname,'public')))


app.listen(3030,()=>{
    console.log("Server Start in port 3030")
})
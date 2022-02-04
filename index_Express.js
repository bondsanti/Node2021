const express = require('express')
const path = require('path')
const app = express()

const indexPage=path.join(__dirname,'webpages/index.html')
const productPage1=path.join(__dirname,'webpages/product1.html')
const productPage2=path.join(__dirname,'webpages/product2.html')
const productPage3=path.join(__dirname,'webpages/product3.html')
// method = get post
//โครงสร้างคำสั่ง app.method(path,(callback function))
app.get('/',(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(indexPage)
})

app.get('/product',(req,res)=>{
    
})

app.listen(3030,()=>{
    console.log("Server Start in port 3030")
})
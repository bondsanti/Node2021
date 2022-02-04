//จัดการ router
const express = require('express')
const router = express.Router()
const path = require('path')

const indexPage=path.join(__dirname,'../webpages/index.html')
const productPage1=path.join(__dirname,'../webpages/product1.html')
const productPage2=path.join(__dirname,'../webpages/product2.html')
const productPage3=path.join(__dirname,'../webpages/product3.html')
// method = get post
//โครงสร้างคำสั่ง app.method(path,(callback function))
router.get('/',(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(indexPage)
})

router.get('/product/:id',(req,res)=>{
    const pID=req.params.id
  if (pID==="1") {
    res.sendFile(productPage1)
  }else if(pID==="2"){
    res.sendFile(productPage2)
  }else if(pID==="3"){
    res.sendFile(productPage3)
  }else{
    
    //res.status(404)
    //res.send("<h2>Not found</h2>")
    res.redirect("/")
  }

})

module.exports = router
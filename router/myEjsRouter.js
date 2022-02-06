const express = require('express')
const router = express.Router()
//เรียกใช้งาน Model
const Product = require('../models/products')

//อัพโหลดไฟล์
const multer = require('multer')

const storage = multer.diskStorage({
    //ตำแหน่งในการจัดเก็บไฟล์
    destination:function (req,file,callback) {
        callback(null,'./public/images/products')
    },
    //กำหนดชื่อไฟล์และนามสกุล
    filename:function (req,file,callback) {
        callback(null,Date.now()+'.jpg')
    }
})
 //เริ่มต้นอัพโหลด
const upload = multer({
    storage:storage
})
// router.get('/',(req,res)=>{
//     const name ="bond dev"
//     const age = 30
//     const address = "<h4> กทม. </h4>" 

//     res.render('index.ejs',{
//         name:name,age:age,address:address
//     })
// })

router.get('/',(req,res) =>{

    //const product = ["เสื้อ","กระเป๋า","รองเท้า","กางเกง","ถุงเท้า"]
    const product = [{name:"โน๊ตบุ๊ค",price:12000,pic:"images/products/product1.png"},
    {name:"เสื้อ",price:1500,pic:"images/products/product2.png"},
    {name:"หูฟัง",price:900,pic:"images/products/product3.png"}]
    res.render('index.ejs',{product:product})
})

router.get('/form',(req,res)=>{
    res.render('form')
})
router.get('/manage',(req,res)=>{
    res.render('manage')
})
router.get('/product',(req,res)=>{
    res.render('product')
})
router.post('/insert',upload.single("pic"),(req,res)=>{
    //console.log(req.body);
    //console.log(req.file);
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        pic:req.file.filename,
        detail:req.body.detail
    })
    // console.log(data);
    Product.saveProduct(data,(err)=>{
        if(err) console.log(err);
    })
    res.redirect('/form')
})
const path = require('path')


module.exports = router
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

    // const product = ["เสื้อ","กระเป๋า","รองเท้า","กางเกง","ถุงเท้า"]
    // const product = [{name:"โน๊ตบุ๊ค",price:12000,pic:"images/products/product1.png"},
    // {name:"เสื้อ",price:1500,pic:"images/products/product2.png"},
    // {name:"หูฟัง",price:900,pic:"images/products/product3.png"}]
    // res.render('index.ejs',{product:product})
    Product.find().exec((err,doc)=>{
        res.render('index',{product:doc})
    })
})

router.get('/form',(req,res)=>{

    if(req.session.login){
        res.render('form')
    }else{
        res.render('admin')  
    }

})
router.get('/manage',(req,res)=>{

    if(req.session.login){
        Product.find().exec((err,doc)=>{
            res.render('manage',{product:doc})
        })
    }else{
        res.render('admin')  
    }
   
})

router.get('/logout',(req,res)=>{
    // res.clearCookie('username')
    // res.clearCookie('password')
    // res.clearCookie('login')
    req.session.destroy((err)=>{
        res.redirect('/manage')
    })
    
})

router.get('/delete/:id',(req,res)=>{

    //console.log(req.params.id);
    Product.findByIdAndDelete(req.params.id,{
        useFindAndModify:false
    }).exec(err=>{
        res.redirect('/manage')
    })
})
router.get('/:id',(req,res)=>{

    Product.findOne({_id:req.params.id}).exec((err,doc)=>{
       //console.log(doc);
       res.render('product',{product:doc})
    })
})



router.post('/edit',(req,res)=>{
  
   Product.findOne({_id:req.body.edit_id}).exec((err,doc)=>{
    //console.log(doc);
    res.render('edit',{product:doc})
 })
})

router.post('/update',(req,res)=>{
   
    let data = {
        name:req.body.name,
        price:req.body.price,
        detail:req.body.detail
    }

    Product.findByIdAndUpdate(req.body.edit_id,data,{useFindAndModify:false}).exec(err=>{
        res.redirect('/manage')
    })

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

router.post('/login',(req,res)=>{
    const username= req.body.username
    const password = req.body.password
    const timeExpire = 30000 // 30 วินาที

    if(username==="admin"&& password==="admin"){
          req.session.username = username
          req.session.password = password
          req.session.login = true
          req.session.cookie.maxAge=timeExpire
        // res.cookie('username',username,{maxAge:timeExpire})
        // res.cookie('password',password,{maxAge:timeExpire})
        // res.cookie('login',true,{maxAge:timeExpire}) // true  เข้าสู่ระบบแล้ว
        res.redirect('/manage')
    }else{
        res.render('404')
    }
})


const path = require('path')


module.exports = router
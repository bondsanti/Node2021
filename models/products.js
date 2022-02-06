//ใช้งาน mongoose
const mongoose = require('mongoose')

//เชื่อมไปยัง mongoDB
const dbURL='mongodb://localhost:27017/productDB'
mongoose.connect(dbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=> console.log(err))

//ออกแบบ Schema

let productSc = mongoose.Schema(
    {
        name:String,
        price:Number,
        pic:String,
        detail:String
    }
)

//สร้าง Models
let Product = mongoose.model("products",productSc)
//ส่งออก Models

module.exports = Product

//ออกแบบฟังก์ชั่นบันทึกข้อมูล
module.exports.saveProduct=function(model,data){
    model.save(data)
}
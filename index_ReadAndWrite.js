//-----Blocking-----
const fs = require('fs')

//อ่านไฟล์ input.txt
// const data=fs.readFileSync('./myFiles/input.txt','utf-8')
// console.log(data)
// console.log('จบการทำงาน')

// //เขียนไฟล์
// const outputText = `Hello Node.js\n ${data} \n ไฟล์ถูกเขียนเมื่อ ${new Date()}`
// fs.writeFileSync('myFiles/output.txt',outputText)
// console.log('เขียนไฟล์เรียบร้อย!')
//---------------------


//------Non-blocking------
 fs.readFile('./myFiles/input.txt','utf-8',(err,data)=>{
     if(err) return console.log('เกิดข้อผิดพลาด',err)
    //console.log(data)
    const outputText = `Hello Node.js\n ${data} \n ไฟล์ถูกเขียนเมื่อ ${new Date()}`
     fs.writeFile('./myFiles/output.txt',outputText,err =>{
        if(err) return console.log('เกิดข้อผิดพลาด',err)
        console.log('เขียนไฟล์เรียบร้อย!')
     })
})
console.log('จบการทำงาน')
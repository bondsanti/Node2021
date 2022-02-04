const http = require('http')
const fs = require('fs')
const url = require('url')

// :: การเรียกอ่านไฟล์ในรูปแบบปปกติ ::

// const indexPage= fs.readFileSync('./webpages/index.html','utf-8')แบบที่่ 1
// const indexPage= fs.readFileSync(`${__dirname}/webpages/index.html`)
// const productPage1= fs.readFileSync(`${__dirname}/webpages/product1.html`)
// const productPage2= fs.readFileSync(`${__dirname}/webpages/product2.html`)
// const productPage3= fs.readFileSync(`${__dirname}/webpages/product3.html`)


// http.createServer ((req,res)=> {
//     const pathName = req.url
//     console.log("url = ",pathName);
//     if (pathName==="/"|| pathName==="/main") {
//       res.writeHead(200)
//       res.end(indexPage)

//     }else if(pathName==="/product1"){
//         res.writeHead(200)
//         res.end(productPage1)
//     }else if(pathName==="/product2"){
//         res.writeHead(200)
//         res.end(productPage2)
//     }else if(pathName==="/product3"){
//         res.writeHead(200)
//         res.end(productPage3)
//     }else{
//         res.writeHead(404)
//         res.write('<h1>Not Found</h1>')
//         res.end() 
//     }

// }).listen(3030,'localhost',()=>{
//     console.log("Server Start in port 3030")
// })
// :: End การเรียกอ่านไฟล์ในรูปแบบปปกติ ::


// ::  การเรียกอ่านไฟล์ในรูปแบบ คิวรี่สตริง ::

const indexPage= fs.readFileSync(`${__dirname}/webpages/index.html`)
const productPage1= fs.readFileSync(`${__dirname}/webpages/product1.html`)
const productPage2= fs.readFileSync(`${__dirname}/webpages/product2.html`)
const productPage3= fs.readFileSync(`${__dirname}/webpages/product3.html`)

http.createServer((req,res)=>{

    //console.log(url.parse(req.url,true));
    const{pathname,query}= url.parse(req.url,true)

    if (pathname==="/"|| pathname==="/main") {
      res.writeHead(200)
      res.end(indexPage)

    }else if(pathname==="/product"){
        console.log(query);
        res.writeHead(200)
        
        if(query.id==="1"){
        res.end(productPage1)
        }else if(query.id==="2"){
         res.end(productPage2)
        }else if(query.id==="3"){
         res.end(productPage3)
        }else{
            res.writeHead(404)
            res.write('<h1>Not Found</h1>')
            res.end() 
        }
    }else{
        res.writeHead(404)
        res.write('<h1>Not Found</h1>')
        res.end() 
    }

}).listen(3030,'localhost',()=>{
    console.log("Server Start in port 3030")
})
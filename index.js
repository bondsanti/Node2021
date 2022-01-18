const http = require('http')

// const server = http.createServer(function (req,res) {
//     res.write('Start Node Server')
//     res.end()
// })

http.createServer ((req,res)=> {
    // res.write('Hello NodeJs Server')
    // res.end()
    const pathName = req.url
    console.log("url = ",pathName);

    if (pathName==="/"|| pathName==="/main") {
      res.writeHead(200)
      res.write('<h1>Hello HomePage</h1>')
      res.end()
    }else{
        res.writeHead(404)
        res.write('<h1>Not Found</h1>')
        res.end() 
    }

}).listen(3030,'localhost',()=>{
    console.log("Server Start in port 3030")
})
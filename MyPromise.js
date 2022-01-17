//สร้าง Promise

const connect = false
const url1 = "santi.dev/file1.json"
const url2 = "santi.dev/file2.json"
const url3 = "santi.dev/file3.json"


function downloading(url) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (connect) {
                //console.log(`โหลด ${url} เรียบร้อย`)
                resolve(`โหลด ${url} เรียบร้อย`)
            } else {
                //console.log(`โหลด ${url} ไม่สำเร็จ`)

                reject('เกิดข้อผิดพลาด')
            }
        }, 3000)
    })

}


// downloading(url1).then(result => {
//     console.log(result)
//     downloading(url2).then(result => {
//         console.log(result)
//         downloading(url3).then(result => {
//             console.log(result)
//         })
//     })
// }).catch(error => {
//     console.log(error)
// })

downloading(url1).then(result => {
    console.log(result)
    return downloading(url2)
}).then(result => {
    console.log(result)
    return downloading(url3)
}).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})
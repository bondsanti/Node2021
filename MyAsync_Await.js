//สร้าง Promise

const connect = true
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
        }, 1000)
    })

}

//Async & Await

async function start() {
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

//เรียกใช้งาน

start()
// api ภาพสินค้า (backend -> frontend ) แสดงภาพในเว็บ
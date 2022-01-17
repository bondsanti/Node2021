// console.log("Start loading")
// setTimeout(() => {
//     console.log("Loading")
// }, 500);
// console.log("Susess")

function calculate(x, y, callback) {
    console.log("กำลังคำนวณ....")
    setTimeout(() => {
        const sum = x + y

        callback(sum)
    }, 3000)
}



calculate(100, 50, function(result) {
    console.log(`ผลบวก = ${result}`)
})
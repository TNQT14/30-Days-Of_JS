const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

const now1 = new Date()
console.log(now.getFullYear()) // 2020

console.log(now.getMonth()) // 0, bởi vì đây là tháng Giêng, tháng(0-11)

console.log(now.getDate()) // 4, bởi vì ngày trong tháng là ngày bốn, ngày(1-31)

console.log(now.getDay()) // 6, bởi vì hôm nay là thứ bảy
//  Chủ nhật là 0, thứ Hai là 1 và thứ bảy là 6
// Ngày trong tuần (0-6)

console.log(now.getHours()) // 0, bời vì thời gian là 00:56:41

console.log(now.getMinutes()) // 56, bời vì thời gian là 00:56:41

console.log(now.getSeconds()) // 41, bời vì thời gian là 00:56:41

console.log(now.getTime()) // 1578092201341, đây là số giây đã trôi qua kể từ ngày 1, tháng 1, năm 1970 đến 4 Tháng 1, 2020 00:56:41

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341,đây là số giây đã trôi qua kể từ ngày 1, tháng 1, năm 1970 đến 4 Tháng 1, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // đúng

console.log(allSeconds) // 1578092201341,đây là số giây đã trôi qua kể từ ngày 1, tháng 1, năm 1970 đến 4 Tháng 1, 2020 00:56:41

console.log(allSeconds == timeInSeconds) // đúng

const year = now.getFullYear() // Lấy năm
const month = now.getMonth() + 1 // Lấy tháng(0 - 11)
const date = now.getDate() // Lấy ngày (1 - 31)
const hours = now.getHours() // Lấy giờ (0 - 23)
const minutes = now.getMinutes() // Lấy phút (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
console.log(3 > 2)              // Đúng, bởi vì 3 lớn hơn 2
console.log(3 >= 2)             // Đúng, bởi vì 3 lớn hơn 2
console.log(3 < 2)              // Sai, bởi vì 3 lớn hơn 2
console.log(2 < 3)              // Đúng, bởi vì 2 bé hơn 3 
console.log(2 <= 3)             // Đúng, bởi vì 2 bé hơn 3
console.log(3 == 2)             // Sai, bởi vì 3 không bằng 2
console.log(3 != 2)             // Đúng, bởi vì 3 không bằng 2
console.log(3 == '3')           // Đúng, chỉ so sánh giá trị
console.log(3 === '3')          // Sai, so sánh cả giá trị lẫn kiểu dữ liệu
console.log(3 !== '3')          // Đúng, so sánh cả giá trị lẫn kiểu dữ liệu
console.log(3 != 3)             // Sai, chỉ so sánh giá trị
console.log(3 !== 3)            // Sai, so sánh cả giá trị lẫn kiểu dữ liệu
console.log(0 == false)         // Đúng, 2 giá trị tương đương nhau
console.log(0 === false)        // Sai, 2 giá trị không giống nhau hoàn toàn
console.log(0 == '')            // Đúng, giá trị tương đương nhau 
console.log(0 == ' ')           // Đúng, giá trị tương đương nhau
console.log(0 === '')           // Sai, 2 giá trị không giống nhau hoàn toàn
console.log(1 == true)          // Đúng, giá trị tương đương nhau
console.log(1 === true)         // Sai, 2 giá trị không giống nhau hoàn toàn
console.log(undefined == null)  // Đúng
console.log(undefined === null) // Sai
console.log(NaN == NaN)         // Sai, không bằng nhau
console.log(NaN === NaN)        // Sai
console.log(typeof NaN)         // Kiểu dữ liệu số

console.log('mango'.length == 'avocado'.length)  // Sai
console.log('mango'.length != 'avocado'.length)  // Đúng
console.log('mango'.length < 'avocado'.length)   // Đúng
console.log('milk'.length == 'meat'.length)      // Đúng
console.log('milk'.length != 'meat'.length)      // Sai
console.log('tomato'.length == 'potato'.length)  // Đúng
console.log('python'.length > 'dragon'.length)   // Sai
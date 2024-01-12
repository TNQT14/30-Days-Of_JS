// Ví dự toán tử &&

const check = 4 > 3 && 10 > 5         // đúng && đúng -> đúng
const check1 = 4 > 3 && 10 < 5         // đúng && sai -> sai
const check2 = 4 < 3 && 10 < 5         // sai && sai -> sai

// Ví dụ toán tử ||

const check3 = 4 > 3 || 10 > 5         // đúng  || đúng -> đúng
const check4 = 4 > 3 || 10 < 5         // đúng  || sai -> đúng
const check5 = 4 < 3 || 10 < 5         // sai || sai -> sai

//Ví dụ toán tử !

let check6 = 4 > 3                     // đúng
let check7 = !(4 > 3)                  // sai
let isLightOn = true
let isLightOff = !isLightOn           // sai
let isMarried = !false                // đúng
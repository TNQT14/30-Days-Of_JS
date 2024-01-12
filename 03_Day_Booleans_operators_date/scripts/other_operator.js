let count = 0
console.log(++count)        // 1
console.log(count)


console.log(count++)        // 0
console.log(count)

console.log(--count) // -1
console.log(count)  // -1

console.log(count--) // 0
console.log(count)   // -1

let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')
isRaining = false

isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

let number = 5
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
number = -5

number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)


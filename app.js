// let n = 5;
// let counter = 0;

// for (let i = 0; i <= n; i++) {
//   console.log(`(${n} + ${i} ** 2 = ${(n + 1) ** 2})`);
//   counter += (n + i) ** 2;
// }
// console.log("sum:", counter);
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];
/*
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */

// let n = 5;
// counter = 0;

// function isPrime(n) {
//   if (n % 2 == 0) counter++;
// }
// console.log(`tub son ${n} ta`);

// Example
/*
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  let index = str.indexOf(str);
  if (index !== -1) {
    return str.slice(0, index) + str.slice(index + value.length);
  } else {
    return str;
  }
}
console.log(removeFirstOccurrences("To be or not to be", "not"));

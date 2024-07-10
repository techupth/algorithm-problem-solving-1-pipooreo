function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let index = [];
  n = numbers.length - 1;
  for (let i = 0; i < n; i++) {
    let sum = numbers[i] + numbers[i + 1];
    if (sum === target) {
      if (!index.includes(i)) {
        index.push(i);
      }
      if (!index.includes(i + 1)) {
        index.push(i + 1);
      }
    }
  }
  return index;
}

const numbers = [2, 7, 2, 15];
console.log(twoSum(numbers, 9));

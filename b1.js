let sum = 0;
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`), 10);
    if (num % 2 !== 0) {
        sum += num;
    }
}
console.log(`Tổng các số lẻ trong dãy số đã nhập là: ${sum}`);
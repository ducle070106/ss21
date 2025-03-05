let num = parseInt(prompt("Nhập một số nguyên:"));
let sum = "Các ước của " + num + " là: ";
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        sum += i + " ";
    }
}
console.log(sum);
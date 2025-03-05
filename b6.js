let number = prompt("Nhập một số nguyên:");
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
       console.log(` Các ước ${number} là : ${i}`);
       console.log(` Các ước ${number} là : ${-i}`);
    }
}
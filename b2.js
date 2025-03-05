let even = 0; 
let odd = 0;  
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`), 10);
    if (num % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}
console.log(`Số lượng số chẵn: ${even}`);
console.log(`Số lượng số lẻ: ${odd}`);
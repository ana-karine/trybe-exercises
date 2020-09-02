// Programa que informa se um número é primo ou não.

let n = 5;
let divisor;

for (i = 2; i < n && divisor != 1; i += 1) {
    divisor = 0;
    if (n % i === 0) {
        divisor += 1;
    }
};

if (divisor === 0) {
    console.log (n + ' é primo.');
} else {
    console.log (n + ' não é primo.');
}
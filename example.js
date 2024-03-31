// This is for further understanding do not use
const values = [11,12,13,14,15,16,17]
function prime(num){
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    if(num % 2 === 1) return true;
}
function primeNum(numbers){
    return numbers.filter(num => prime(num));
}
const primeValues = primeNum(values);
console.log(primeValues);
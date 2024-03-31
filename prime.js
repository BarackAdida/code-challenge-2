const numArray = [1,2,3,4,5,6,7,8,9,10];
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    // the line eliminates even numbers and odd numbers devisible by three
    if (num % 2 === 0 || num % 3 === 0) return false;
    if (num % 2 === 1) return true;}
   
//filter the  prime numbers in the array
function findPrimes(numbers) {
    return numbers.filter(num => isPrime(num));
}
//declaring the array and running it to select the prime numbers
const primeValues = findPrimes(numArray);
console.log(primeValues);
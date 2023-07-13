const numStartEl = document.getElementById("num-start");
const numEndEl = document.getElementById("num-end");
const resultEl = document.querySelector(".result");
const calculateBtnEl = document.querySelector(".btn");

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(5));

const sumOfPrime = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

calculateBtnEl.addEventListener("click", () => {
  let a = numStartEl.value;
  let b = numEndEl.value;
  console.log(sumOfPrime(a, b));
  resultEl.innerText = sumOfPrime(a, b);
});

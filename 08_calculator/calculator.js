const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total,value) => {
    return total + value;
  },0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  for (let i = num - 1; i >= 1; i --){
    num = num * i;
  }
  return num === 0 || num < 0 ? 1 : num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
function multiplyBy2(num) {
  return num * 2;
}

function memoizeMyFunction(func) {
  let map = {};

  return function (x) {
    if (map[x]) {
      return `from hash ${map[x]}`;
    } else {
      map[x] = func(x);

      return `from function ${map[x]}`;
    }
  };
}

const wrapper = memoizeMyFunction(multiplyBy2);
console.log(wrapper(2)); // Returned from function 4
console.log(wrapper(4)); // Returned from function 8
console.log(wrapper(5)); // Returned from function 10
console.log(wrapper(2)); // Returned from memory 4
console.log(wrapper(2)); // Returned from memory 4
console.log(wrapper(6)); // Returned from function 12

function testReturn() {
  //   return;
  //   {
  //     bar: 'hello';
  //   }
}

console.log(testReturn());

console.log(0.1 + 0.2);

const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello from p1');
    }, 5000);
  });
const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello from p2');
    }, 5000);
  });
const promise3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello from p3');
    }, 5000);
  });

function testPromise() {
  let p1 = promise1();
  let p2 = promise2();
  let p3 = promise3();
  fetch('https://reqres.in/api/users');
  //   let [r1, r2, r3] = Promise.all([promise1()]);
  //   console.log(r1, r2, r3);
}
testPromise();

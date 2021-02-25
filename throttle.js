// document.addEventListener('DOMContentLoaded', () => {
//   console.log('dom loaded');
//   const wrapper = document.getElementsByClassName('wrapper')[0];
//   let timer = null;
//   const throttleMe = (func, time) => {
//     if (timer) {
//       return null;
//     } else {
//       timer = setTimeout(() => {
//         func();
//         timer = null;
//       }, time);
//     }
//   };

//   wrapper.addEventListener('scroll', () => {
//     throttleMe(() => {
//       console.log('*******');
//     }, 500);
//   });
// });

const printMe = () => {
  console.log('print me');
};

let timer;
const throttleMe = (cb, time) => {
  if (timer) {
    return;
  }

  timer = setTimeout(() => {
    cb();
    timer = null;
  }, time);
};

var debounceTimer;
const debounceMe = (cb, time) => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    cb();
  }, time);
};

// throttleMe(printMe, 5000);
// setTimeout(() => {
//   console.log('calling print');
//   throttleMe(printMe, 6000);
// }, 1000);
// setTimeout(() => {
//   console.log('calling print');
//   throttleMe(printMe, 5000);
// }, 2000);
// setTimeout(() => {
//   console.log('calling print');
//   throttleMe(printMe, 5000);
// }, 7000);

debounceMe(printMe, 6000);
setTimeout(() => {
  console.log('deboucing again');
  debounceMe(printMe, 6000);
}, 4000);
setTimeout(() => {
  console.log('deboucing again');
  debounceMe(printMe, 6000);
}, 8000);
setTimeout(() => {
  console.log('deboucing again');
  debounceMe(printMe, 6000);
}, 12000);

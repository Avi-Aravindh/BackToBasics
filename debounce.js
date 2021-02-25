function debounce(fn, time) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      //   fn.apply(arguments);
      fn();
    }, time);
  };
}

function _shouldFireOnlyOnce() {
  console.log('hello');
}

const shouldFireOnlyOnce = debounce(_shouldFireOnlyOnce, 350);

for (let i = 0; i < 10; i++) {
  shouldFireOnlyOnce();
  //   _shouldFireOnlyOnce();
}

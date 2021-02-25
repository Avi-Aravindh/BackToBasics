document.addEventListener('DOMContentLoaded', function () {
  const isBrowser = typeof window === 'object' || typeof document === 'object';
  console.log(isBrowser);
  console.log('window', window);
  console.log('document', document);
  const touchSupported =
    'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof DocumentTouch);

  console.log({ touchSupported });
  const mouse_element = document.getElementById('mouseDown');
  const cloned = mouse_element.cloneNode(mouse_element);
  console.log({ cloned });
  mouse_element.appendChild(cloned);
  // const input_element = document.getElementById('input');
  // console.log(input_element);
  // input_element.addEventListener('keypress', (e) => {
  //   console.log('event', e, e.target.selectionStart, e.target.selectionEnd);
  //   // if ((e.keyCode != 32 && e.keyCode < 48) || e.keyCode > 57) {
  //   //   e.preventDefault();
  //   //   e.target.setSelectionRange(0, 0);
  //   // }
  // });

  // const mouse_element = document.getElementById('mouseDown');
  // console.log('mouse_element', mouse_element);
  // mouse_element.addEventListener('mousedown', (e) => {
  //   console.log('rect', mouse_element.getBoundingClientRect(), e.scrollHeight);
  //   // console.log('mouse down', e);
  // });

  // console.log(mouse_element.classList.contains('emailInput'));

  // const favicon = document.querySelector('link[rel="icon"]');
  // let url = 'http://icons.duckduckgo.com/ip2/www.stackoverflow.com.ico';
  // if (favicon) {
  //   // Update the new link
  //   favicon.href = url;
  // } else {
  //   // Create new `link`
  //   const link = document.createElement('link');
  //   link.rel = 'icon';
  //   link.href = url;

  //   // Append to the `head` element
  //   document.head.appendChild(link);
  // }
});

function buttonClicked(event) {
  const input_element = document.getElementById('input');

  input_element.classList.toggle('inputArea');
}

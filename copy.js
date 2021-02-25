document.addEventListener('DOMContentLoaded', () => {
  const addElement = document.getElementById('addElement');
  const container = document.getElementById('container');
  addElement.addEventListener('click', (e) => {
    console.log('addElement');
    let divElement = document.createElement('div');
    divElement.innerHTML = 'Hello';

    container.appendChild(divElement);
  });
  //   const rangeSelector = document.getElementById('rangeSelector');
  //   const knob = document.getElementById('knob');
  //   rangeSelector.addEventListener('mousedown', (e) => {
  //     console.log(e, knob);
  //     knob.style.marginLeft = `${e.clientX}px`;
  //   });
  //   const maxCharCount = 500;

  //   const codeElement = document.getElementById('code');

  //   const buttonElement = document.getElementById('copyButton');
  //   buttonElement.addEventListener('click', handleCopy);
  //   const selection = window.getSelection();

  //   const range = document.createRange();
  //   range.selectNode(codeElement);

  //   const textArea = document.getElementById('textarea');
  //   const textAreaCounter = document.getElementById('textareaCounter');
  //   textArea.focus();
  //   textArea.addEventListener('input', (e) => {
  //     const target = e.target;
  //     const currentLength = e.target.value.length;
  //     textAreaCounter.innerHTML = `${currentLength} / ${maxCharCount}`;
  //   });

  //   function handleCopy(e) {
  //     textArea.select();
  //     try {
  //       document.execCommand('copy');
  //       buttonElement.innerHTML = 'Copied';
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
});

// const randomColor = function () {
//   let r = Math.round(Math.random() * 255);
//   let g = Math.round(Math.random() * 255);
//   let b = Math.round(Math.random() * 255);
//   let rgb = `rgb(${r},${g},${b})`;
//   return rgb;
// };

const randomColor = function () {
    let hex = '0123456789ABCDEF';
    let code = '#';
    for (let i = 0; i < 6; i++) {
      code += hex[Math.round(Math.random() * 16)];
    }
    return code;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeColor, 1000);
    }
    function changeColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
const clock = document.querySelector('#clock'); // also document.getElementById('clock')

// console.log(date.toLocaleDateString()); 1/28/2025
//console.log(date.toLocaleString()); 1/28/2025, 10:01:21 PM
//console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

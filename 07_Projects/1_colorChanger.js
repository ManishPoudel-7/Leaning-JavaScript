const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const audioPath = "C:\Users\ram\OneDrive\Desktop\MCA\Semester 2\Web Development\JavaScript\button-202966.mp3    ";

buttons.forEach(function (button) {
  addEventListener('click', function (e) {
    const color = e.target.id;

    const audio = new Audio(audioPath);
    audio.play();
    switch (color) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

// if (e.target.id === 'grey') {
//   body.style.backgroundColor = e.target.id;
// }
// if (e.target.id === 'white') {
//   body.style.backgroundColor = e.target.id;
// }
// if (e.target.id === 'blue') {
//   body.style.backgroundColor = e.target.id;
// }
// if (e.target.id === 'yellow') {
//   body.style.backgroundColor = e.target.id;
// }

const form = document.querySelector('form');
// this is not used here because it will assign empty value to the height when the page is loaded which we dont want
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let category = '';
  if (bmi < 18.6) {
    category = 'UnderWeight';
  } else if (bmi > 18.6 && bmi <= 24.9) {
    category = 'Normal';
  } else {
    category = 'OverWeight';
  }

  results.innerHTML = `BMI is ${bmi} and it is ${category}`;
});

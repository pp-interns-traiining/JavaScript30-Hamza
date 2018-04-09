const button = document.getElementById('get-jokes');
button.addEventListener('click', getJokes);
const display = document.getElementById('jokes');


function getJokes(e) {
  console.log('yo');

  const number = document.getElementById('number').value || 1;

  const xhr = new XMLHttpRequest();

  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';

      if (response.type === 'success') {
        response.value.forEach(item => {
          output += `<li>Joke: ${item.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong buddy!</li>';
      }
      display.innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}

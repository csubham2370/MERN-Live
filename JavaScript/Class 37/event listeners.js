

const button = document.getElementById('myButton');

function handleClick() {

  alert('Button clicked!');
}

button.addEventListener('click',handleClick);
button.removeEventListener('click',handleClick);
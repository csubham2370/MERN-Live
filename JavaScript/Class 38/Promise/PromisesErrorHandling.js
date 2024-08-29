


// fetch('https://api.example.com/data')
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.error('Fetch error:',error));

// fetch();

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));


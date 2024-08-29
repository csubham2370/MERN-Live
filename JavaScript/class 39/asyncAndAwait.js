

async function myFunction() {
  return 'Hello';
}

async function fetchData(){



  let response = await fetch('https://jsonplaceholder.typicode.com/posts')

  let data = await response.json();

  return data;
  
}

async function logData(){


    let data = await fetchData()
    console.log(data);

}


logData();
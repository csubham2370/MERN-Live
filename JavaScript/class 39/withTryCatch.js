async function getData() {

  try{

    let response = await fetch('https://jsonplaceho');
    let data = await response.json();
    return data;
  }

  catch (error) {
    console.log('Error:',error);
  }
}

getData()
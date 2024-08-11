const outerDiv = document.getElementById('outerDiv');
const InnerButton = document.getElementById('innerButton');

outerDiv.addEventListener('click',() =>{

  console.log('Outer div clicked bubbling.');
});

InnerButton.addEventListener('click',() =>{

  console.log('Inner Button clicked');
});


const outerDiv = document.getElementById('outerDiv');
const InnerButton = document.getElementById('innerButton');


InnerButton.addEventListener('click',(event) =>{

  console.log('Inner Button clicked');

  event.stopPropagation();
});



outerDiv.addEventListener('click',() =>{

  console.log('Outer div clicked bubbling.');


});


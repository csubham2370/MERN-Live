

const outerDiv = document.getElementById('outerDiv');
const innerDiv = document.getElementById('innerDiv');

outerDiv.addEventListener('click',() =>{
    console.log('Outer Div clicked!');
},true);

innerDiv.addEventListener('click',() =>{

  console.log('Inner Div clicked!');
});
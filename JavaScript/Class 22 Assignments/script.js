let bagCount = 0;

function updateBagSummery(){
  document.getElementById('bag-summery').innerText = `Your Bag has ${bagCount} items`

}

function add(){
  bagCount +=1;
  updateBagSummery();

}

function wish(){
  if (bagCount > 0){
  bagCount -=1;
  updateBagSummery();
  }
  else{
    alert('No items in the bag to move to wishlist!')
  }
}

function buy(){
  bagCount +=2;
  updateBagSummery()
}
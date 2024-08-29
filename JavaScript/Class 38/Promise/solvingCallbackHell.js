

function step1(){
  return new Promise((resolve) =>{
    setTimeout(() =>{
      console.log('step 1');
      resolve();
    },1000);
  });
}

function step2(){
  return new Promise((resolve) =>{
    setTimeout(() =>{
      console.log('step 2');
      resolve();
    },1000);

  });
}

function step3(){
  return new Promise((resolve) =>{
    setTimeout(() =>{
      console.log('step 3');
      resolve();
    },1000);
  });
}


step1()
.then(() => step2())
.then(() => step3())
.then(() =>{
  console.log('All steps completed.');
});
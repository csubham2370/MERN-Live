function step1(callback) {
  setTimeout(() => {
    console.log('step 1');
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log('step 2');
    callback(); // This line was missing
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log('step 3'); // Fixed the typo here
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log('All steps completed.');
    });
  });
});

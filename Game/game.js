
let score = {
  user:0,
  computer:0,
  tie:0,
  updateScore: function(){
    document.getElementById('score').innerHTML=`Score: Computer win ${this.computer}, User win: ${this.user}, Tie: ${this.tie}`;
  },
};
    function User(value){
      let userChoice = `${value}`;
      let computerSelect = Math.floor(Math.random() * 4);
      let res;

      if (computerSelect >= 0 && computerSelect <= 1){
         computerSelect = 'Rock👊';
      } 
      else if(computerSelect > 1 && computerSelect <= 2){
         computerSelect = 'Paper🖐️';
      }
      else if (computerSelect > 2 && computerSelect <=3){
        computerSelect = 'Scissor✌️';
      }
    console.log(userChoice);
    console.log(computerSelect);

    if (computerSelect === userChoice) {
        res = `It's a Tie!❌`;
        score.tie++;
    } else if (computerSelect === 'Rock👊' && userChoice === 'Scissor✌️') {
        res = `Sorry, you lost. Try again!😣`;
        score.computer++;
    } else if (computerSelect === 'Paper🖐️' && userChoice === 'Rock👊') {
        res = `Sorry, you lost. Try again!😣`;
        score.computer++;
    } else if (computerSelect === 'Scissor✌️' && userChoice === 'Paper🖐️') {
        res = `Sorry, you lost. Try again!😣`;
        score.computer++;
    } 
    else{
      res =  `You win !😁`;
      score.user++;
    }
    score.updateScore();
      document.getElementById('user').innerText = ` Your choice ${userChoice}`;
      document.getElementById('com').innerText = ` Computer has chosen ${computerSelect}`;
      document.getElementById('res').innerText = `${res}`;
     

    }

 
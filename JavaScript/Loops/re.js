function fact(n){
  if ((n ==0) || (n == 1))

    return n; 
  console.log(n);
  let num = fact(n -1);
  console.log('----------');
  console.log(num);
  console.log(n);
  return num * n;
}

console.log('Js');
console.log(fact(5));
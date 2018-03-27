function fibCounter(num){
  if(num <= 1){
    return num;
  }
  return fibCounter(num - 1) + fibCounter(num - 2);
}

fibCounter(3);
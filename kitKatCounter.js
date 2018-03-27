function kitKatCounter() {
  for(i=1; i <= 100; i++){
    if(i % 3 === 0){
      console.log('kit');
    } else if(i % 7 === 0){
      console.log('kat');
    } else {
      console.log(i);
    }
  }
}

kitKatCounter();
function charCounter(string) {
    let results = [];
    for(i=0; i<= 24; i++){
      var letter = String.fromCharCode(97 + i);
      var count = string.split( new RegExp( letter, "gi" ) ).length-1;
      
      if(count > 0){
        var countedString = results.push(letter + " => " + count); 
      }
    }
    return results;
}

charCounter('AOISFNoianfpasncas');
module.exports = function reverse (n) {
    var stringint = String(n);
    var recal = "";
  
    for(var i = stringint.length-1; i >= 0 ; i--){
        if(stringint[i]){
            if(stringint[i]=="-"){
                continue;
                recal = "-" + recal;
                
            }
        }
      recal+=stringint[i];
    }

    return recal;
}

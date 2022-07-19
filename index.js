function sumPrimes(num) {
  //create an array with values from 1 to 10
  var val =Array.from({length: num}, (_, i) => i + 1)
  
  val = val.filter((number)=> {
    for(var i = 2; i < number; i++){
      if(number % i === 0){
        
        return false
      }
    }
    return number > 1    // [2, 3, 5, 7]
  }).reduce(function(a, b){
    return a + b   //sum = 17
  })
return val
  }
  

console.log(sumPrimes(10));
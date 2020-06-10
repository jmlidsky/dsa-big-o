function powerCalculator(integer, exponent) {
    let total = 1;
    for(let i = 0; i < exponent; i++) {
      total *= integer
    }
    console.log(total)
  }
  
  powerCalculator( 5, 2 )
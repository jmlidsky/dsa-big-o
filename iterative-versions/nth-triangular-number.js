function nthTriangle(num) {
    let output = 0
    for( let i = 0; i < num; i++) {
      output += num - i
    }
    console.log(output)
  }
  
  nthTriangle(3)
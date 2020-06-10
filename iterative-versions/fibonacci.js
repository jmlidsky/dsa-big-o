function fib(num) {
    let output = []
    for (let i = 0; i <= num; i++) {
      if (i === 0) {
        output.push(0)
      }
      else if (i === 1) {
        output.push(1)
      }
      else {
        output.push(output[i - 1] + output[i - 2])
      }
    }
    return output
  }
  
  fib(5)
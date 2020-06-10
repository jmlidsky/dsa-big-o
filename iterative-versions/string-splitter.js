function splitter(str, separator) {
    let output = ''
    for(let i = 0; i < str.length; i++) {
      if(str[i] !== separator) {
        output += str[i]
      }
    }
    console.log(output)
  }
  
  splitter('02/20/2020', '/')
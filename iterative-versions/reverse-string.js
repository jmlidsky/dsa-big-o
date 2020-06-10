function reverseString(string) {
    let output = ''
    for(let i=0; i < string.length; i++) {
        output = string[i] + output
    }
    console.log(output)
}

reverseString('dog')
// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

function countingSheep(num) {
    for(let i = 0; i < num; i++) {
      console.log(`${num - i}: Another sheep jumps over the fence`)
    }
    console.log(`All sheep jumped over the fence`)
  }
  
  countingSheep(3)
//Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 
function numArray(arr) {
  let oddNums = []
  arr.map((x) => {
    if(x%2 !== 0) {
      oddNums.push(x)
    }
  })
  console.log(oddNums)
}

numArray([1, 2, 3, 4, 5, 6, 7, 8])
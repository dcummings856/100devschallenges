//Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!
function numAndWord(num, word) {
  if (word.length * num > 100) {
    alert('WINNER!')
  } else {
    console.log('try again')
  }
}

console.log(numAndWord(50, 'hello'))
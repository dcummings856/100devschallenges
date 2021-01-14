//Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 
let nameList = []
function person(name) {
  nameList.push(name)
  console.log(name)
  console.log(nameList.indexOf(name))
}

person('dave')
person('mango')
person('julia')
person('george')
person('vincent')
//checks wheather the function should increment or not
function checkIfCounterShouldIncrement(firstName, namesGreeted, counter){
  var foundName = false;

  for (var i = 0; i < namesGreeted.length; i++) {
    if (namesGreeted[i] === firstName) {
      foundName = true;
    }
  }
  if (!foundName){
    counter++;
    namesGreeted.push(firstName);
    //sets the value to localStorage
    localStorage.setItem('counter', counter);
  }
  return counter;
}

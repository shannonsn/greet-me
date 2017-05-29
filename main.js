//set up of local storage
if (localStorage.getItem('counter') === null) {
  localStorage.setItem("counter", 0);

    var counter = Number(localStorage.getItem("counter"));
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
} else {
    var counter = Number(localStorage.getItem("counter"));
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
}

// var counters = 0;
var inputValue = document.getElementById("myText").value;
//this function gets the name from the textbox
var namesGreeted = [];
 function getInputName() {
  var inputValue = document.getElementById("myText").value;

          return inputValue;
    };

// this function checks which radio button has been checked/clicked
function getLanguage() {
    var radioButton = document.getElementsByName('language');
    for (var i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked && radioButton[i].value === 'English') {
            return 'hello';
        } else if (radioButton[i].checked && radioButton[i].value === 'Espanol') {
            return 'hola';
        } else if (radioButton[i].checked && radioButton[i].value === 'Dutch') {
            return 'hallo';
        }
    }
};
//checks wheather the function should increment or not
function checkIfCounterShouldIncrement(firstName){
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
//this function controls all other functionality of this program/application
function mainFunction() {
    var name = getInputName();
    var lang = getLanguage();

    document.getElementById('counter').innerHTML = checkIfCounterShouldIncrement(name);
    document.getElementById('demo').innerHTML = lang + ", " + name;
    document.getElementById('myText').innerHTML = " ";
}
// reset counter
function myResetFunction() {
    var reset = 0
    document.getElementById('counter').innerHTML = counters = 0;
}

//set up of local storage
 if (localStorage.getItem('counter') === null) {
  localStorage.setItem("counter", 0);

    var counter = Number(localStorage.getItem("counter"));
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
} else {
    var counter = Number(localStorage.getItem("counter"));
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
};
var namesGreeted = [];
//this function controls all other functionality of this program/application
function mainFunction() {
    var name = getInputName();
    var lang = getLanguage();

    document.getElementById('counter').innerHTML = checkIfCounterShouldIncrement(name);
    document.getElementById('demo').innerHTML = lang + ", " + name;
    document.getElementById('myText').value = " ";

}

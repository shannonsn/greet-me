if (localStorage.getItem('counter') === null) {
    localStorage.setItem("counter", 0);
    var counter = Number(localStorage.getItem("counter"));
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
} else {
    var counter = Number(localStorage.getItem("counter"));
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
}
var namesGreeted = {};
document.getElementById("myText").innerHTML
for (var i = 0; i < namesGreeted.length; i++) {

}


function myFunction() {
    var myTextString = "myText";
    var x = document.getElementById("myText").value;

    var radioButtonEng = document.getElementById('english');

    if (radioButtonEng.checked && x.length > 0 && x !== " " && namesGreeted[x] === undefined) {
        namesGreeted[x] = 1
        document.getElementById('demo').innerHTML = 'Hello, ' + x;
        counter++;
        localStorage.setItem('counter', counter)
        document.getElementById('counter').innerHTML = counter;
        namesGreeted.push(document.getElementById("myText").value);
    } else if (document.getElementById('espanol').checked && x.length > 0 && x !== " " && namesGreeted[x] === undefined) {
        namesGreeted[x] = 1
        document.getElementById('demo').innerHTML = 'Hola, ' + x;
        counter++;
        localStorage.setItem('counter', counter)
        document.getElementById('counter').innerHTML = counter
        namesGreeted.push(document.getElementById("myText").value);
    } else if (document.getElementById('dutch').checked && x.length > 0 && x !== " " && namesGreeted[x] === undefined) {
        namesGreeted[x] = 1
        document.getElementById('demo').innerHTML = 'Hallo, ' + x;
        counter++;
        localStorage.setItem('counter', counter)
        document.getElementById('counter').innerHTML = counter;
        namesGreeted.push(document.getElementById("myText").value);
    } else if (document.getElementById("english").checked && x.length > 0 && x !== " " && x !== undefined) {
      document.getElementById("demo").innerHTML = 'Hello, ' + x;
       document.getElementById("counter").innerHTML = counter;
    } else if (document.getElementById("espanol").checked && x.length > 0 && x !== " " && x !== undefined) {
        document.getElementById("demo").innerHTML = 'Hola ' + x;
        document.getElementById("counter").innerHTML = counter;
    } else if (document.getElementById("dutch").checked && x.length > 0 && x !== " " && x !== undefined) {
        document.getElementById("demo").innerHTML = 'Hallo ' + x;
        document.getElementById("counter").innerHTML = counter;
    }

    document.getElementById('myText').value = '';
}

function myResetFunction() {
    var reset = 0
    document.getElementById('counter').innerHTML = counter = 0;
}

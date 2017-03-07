if (localStorage.getItem('counter') === null) {
    localStorage.setItem("counter", 0);
    var counter = Number(localStorage.getItem("counter"));
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
} else {
    var counter = Number(localStorage.getItem("counter"));
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
}
var namesGreeted = {};
//console.log(namesGreeted);
document.getElementById("myText").innerHTML
for (var i = 0; i < namesGreeted.length; i++) {
    //console.log(namesGreeted[i])
}
//if (namesGreeted[x] === undefined) {
//    greetingsCounter++;
//}

function myFunction() {
    var myTextString = "myText";
    var x = document.getElementById(myTextString).value;

    var radioButtonEng = document.getElementById('english');

    if (radioButtonEng.checked && x.length > 0 && namesGreeted[x] === undefined) {
        namesGreeted[x]=1
        document.getElementById('demo').innerHTML = 'Hello, ' + x;
        counter++;
        localStorage.setItem('counter', counter)
        document.getElementById('counter').innerHTML = counter;
        namesGreeted.push(document.getElementById("myText").value);
    } else if (document.getElementById('espanol').checked && x.length > 0 && namesGreeted[x] === undefined) {
      namesGreeted[x]=1
        document.getElementById('demo').innerHTML = 'Hola, ' + x;
        counter++;
        localStorage.setItem('counter', counter)
        document.getElementById('counter').innerHTML = counter
        namesGreeted.push(document.getElementById("myText").value);
    } else if (document.getElementById('dutch').checked && x.length > 0 && namesGreeted[x] === undefined) {
      namesGreeted[x]=1
        document.getElementById('demo').innerHTML = 'Hallo, ' + x;
        counter++;
        localStorage.setItem('counter', counter)
        document.getElementById('counter').innerHTML = counter;
        namesGreeted.push(document.getElementById("myText").value);
    }
    document.getElementById('myText').value = '';
}


function myResetFunction() {
    var reset = 0
    document.getElementById('counter').innerHTML = counter = 0;
}

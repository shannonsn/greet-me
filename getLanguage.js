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

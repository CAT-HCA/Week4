window.onload = function (e) {
    var textField = document.getElementById("textField");
    textField.onkeypress = function (e){
        let key = e.charCode ? e.charCode : e.keyCode;
        if (key > 48 && key < 57)
        {
            return false;
        };    
    }
    textField.onkeyup = function (e) {
        textEntered = textField.value;
        counter = (textField.maxLength - (textEntered.length));
        countRemaining = document.getElementById("msgField");
        countRemaining.innerHTML = "Remining characters " + counter;
    }
}
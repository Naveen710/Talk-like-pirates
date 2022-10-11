/*var userName=prompt("May I know your name please")
alert("My name is" + userName)*/
var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output")

var serverUrl = 'https://api.funtranslations.com/translate/yoda.json';

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log(error);
    alert('Something is wrong with server');
}

function clickHandler() {
    var inputTxt = txtInput.value;


    fetch(getTranslationUrl(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
                txtOutput.innerHTML = translatedText;
        })
        .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler);
/*var userName=prompt("May I know your name please")
alert("My name is" + userName)*/
var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var Output = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" +encodeURIComponent(text);
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something went wrong with server")
}

function clickHandler() {
    var inputTxt = txtInput.value;

    fetch(getTranslationUrl(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            Output.innerText = pirateTranslatedText;
            console.log(json.contents.translated);
        })
        .catch(errorHandler)
    }
    btnTranslate.addEventListener("click", clickHandler);
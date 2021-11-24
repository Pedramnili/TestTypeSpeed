const TIME_LIMIT = 60;
const TEXT =
    "سعی نکنید همه چیز را بدانید. شما ممکن است خیلی چیزها را دیده و انجام داده باشید، اما لزوما به این معنی نیست که شما می دانید بهترین است. سعی نکنید به مردم بگویید که چگونه می توانند کارها را به شیوه ای بهتر انجام دهند یا اینکه بهتر می توانند کاری انجام دهند.";

let wpmText = document.getElementById("wpm");
let errorText = document.getElementById("errors");
let timerText = document.getElementById("time");
let accuracyText = document.getElementById("accuracy");

let typeText = document.getElementById("type-text");

let textArea = document.getElementById("textarea");

let timeLeft = 0;
let timeElapsed = 0;
let errors = 0;
let accuracy = 0;
let typedCharacter = 0;
let timer = null;
let hasStarted = false;

initializeTest({timeLimit: TIME_LIMIT, text: TEXT});

textArea.addEventListener("input", update);

function initializeTest({timeLimit, text}) {
    for (x in text) {
        let span = document.createElement("span")
        MyText = document.createTextNode(text[x]);
        span.appendChild(MyText);
        typeText.appendChild(span);
    }
    timerText.innerHTML = TIME_LIMIT;
}

function update() {
    if (!hasStarted) {
        timer = setInterval(updateTimer, 1000);
        hasStarted = true;
    }
    typedCharacter++;
    updateCharactersStatus();
    updateErrors();
    updateAccuracy();
}

function updateCharactersStatus() {
    // TODO: Complete this function
}

function updateAccuracy() {
    const accuracy = ((typedCharacter - errors) / (typedCharacter)) * 100;
    const rounding = Math.round(accuracy);
    return rounding;
}

function updateErrors() {
  // TODO: Complete this function
}

function updateWpm() {
    const wpm = ((typedCharacter / 5) / timeElapsed) * 60;
    const round = Math.round(wpm);
    return round;
}

function updateTimer() {
    // TODO: Complete this function
}

function finishTest() {
  timerText.value === '0' ? (clearTimeout(thisFunction)) && (textArea.disabled = true) : false;
}

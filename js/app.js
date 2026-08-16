const dayOptions = document.querySelectorAll("#day-options button");
const helpOptions = document.querySelectorAll("#help-options button");
const badOptions = document.querySelectorAll("#bad-options button");

function chooseOption(options) {
    options.forEach(function(button) {

        button.addEventListener("click", function() {

            options.forEach(function(item) {
                item.classList.remove("selected");
            });

            button.classList.add("selected");
        });

    });
}

chooseOption(dayOptions);
chooseOption(helpOptions);
chooseOption(badOptions);


const makeSignal = document.querySelector("#make-signal");
const signal = document.querySelector("#signal");

const dayAnswer = document.querySelector("#day-answer");
const helpAnswer = document.querySelector("#help-answer");
const badAnswer = document.querySelector("#bad-answer");


function getAnswer(options) {

    for (let i = 0; i < options.length; i++) {

        if (options[i].classList.contains("selected")) {
            return options[i].textContent.trim();
        }

    }

    return "";
}


makeSignal.addEventListener("click", function() {

    const day = getAnswer(dayOptions);
    const help = getAnswer(helpOptions);
    const bad = getAnswer(badOptions);

    if (day === "" || help === "" || bad === "") {

        alert("Please answer all three questions first.");
        return;

    }

    dayAnswer.textContent = day;
    helpAnswer.textContent = help;
    badAnswer.textContent = bad;

    signal.classList.remove("hidden");

    signal.scrollIntoView({
        behavior: "smooth"
    });

});


const words = document.querySelector("#words");
const makeAiSignal = document.querySelector("#make-ai-signal");

const aiResult = document.querySelector("#ai-result");

const aiDay = document.querySelector("#ai-day");
const aiHelp = document.querySelector("#ai-help");
const aiBad = document.querySelector("#ai-bad");


makeAiSignal.addEventListener("click", function() {

    const text = words.value.trim();

    if (text === "") {

        alert("Tell us what you're experiencing first.");
        return;

    }

    aiDay.textContent =
        "I may become quiet or find it difficult to communicate.";

    aiHelp.textContent =
        "Give me some space and check in with me later.";

    aiBad.textContent =
        "Please avoid pressuring me to explain everything immediately.";

    aiResult.classList.remove("hidden");

    aiResult.scrollIntoView({
        behavior: "smooth"
    });

});
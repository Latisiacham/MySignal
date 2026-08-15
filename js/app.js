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


function getAnswer(options) {

    for (let i = 0; i < options.length; i++) {

        if (options[i].classList.contains("selected")) {
            return options[i].textContent;
        }

    }

    return "";
}
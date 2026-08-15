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